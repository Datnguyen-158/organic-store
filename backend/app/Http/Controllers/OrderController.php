<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Http\Requests\OrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use Illuminate\Support\Facades\DB;
use App\Models\ProductWeight;
use App\Models\Product;
use Illuminate\Support\Facades\Log;
class OrderController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $Order = Order::join('receiver','receiver.receiver_id','=','orders.receiver_id')
        //                         ->get();
        $Order = Order::with('receiver')->get();
        if(count($Order)>0){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $Order,
                ]
            );
        }else{
            return response()->json(
                [
                    "message" => "lấy dữ liệu thất bại hoặc không có",
                ]
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::listen(function ($query) {
            Log::info('SQL: ' . $query->sql);
            Log::info('Bindings: ', $query->bindings);
        });
    
        DB::beginTransaction();
    
        try {
            $order = Order::create([
                'user_id' => $request->user_id,
                'receiver_id' => $request->receiver_id,
                'order_date' => $request->order_date,
                'order_status' => '0',
                'TotalPrice' => $request->TotalPrice,
            ]);
    
            foreach ($request->items as $item) {
                // Tạo chi tiết đơn hàng
                $order->orderDetails()->create([
                    'product_id' => $item['product_id'],
                    'product_weights_id' => $item['product_weights_id'],
                    'orderDetail_quantity' => $item['Quantity'],
                ]);
    
                // Lấy thông tin trọng lượng từ bảng product_weights
                $productWeight = ProductWeight::where('product_weights_id', $item['product_weights_id'])->first();
    
                if ($productWeight) {
                    // Chuyển đổi weight từ chuỗi (ví dụ "500g") thành số nguyên
                    $weight = (int) filter_var($productWeight->weight, FILTER_SANITIZE_NUMBER_INT);
    
                    // Tính toán số lượng cần trừ trong bảng product
                    $quantityToSubtract = $weight * $item['Quantity'];
    
                    // Lấy thông tin sản phẩm từ bảng products
                    $product = Product::where('product_id', $item['product_id'])->first();
    
                    if ($product) {
                        if ($product->product_quantity < $quantityToSubtract) {
                            throw new \Exception("Không đủ hàng cho sản phẩm ID: {$item['product_id']}");
                        }
    
                        // Cập nhật lại số lượng trong bảng products
                        $product->product_quantity -= $quantityToSubtract;
                        $product->save();
                    }
                }
            }
    
            DB::commit();
    
            return response()->json(['message' => 'Đặt hàng thành công.'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Order Error: ' . $e->getMessage());
    
            return response()->json(['message' => 'Lỗi khi đặt hàng.', 'error' => $e->getMessage()], 500);
        }
    }
    
    
public function updateStatus(Request $request, $id)
{
    // Validate dữ liệu đầu vào
    $request->validate([
        'order_status' => 'required|in:1,2', // 1: Đã giao, 2: Đã hủy
    ]);

    // Tìm đơn hàng theo ID
    $order = Order::findOrFail($id);

    // Cập nhật trạng thái
    $order->order_status = $request->input('order_status');
    $order->save();

    return response()->json([
        'message' => 'Cập nhật trạng thái thành công',
        'status' => $order->order_status
    ]);
}


    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return response()->json(
            [
                "message" => "lấy dữ liệu thành công",
                "data" => $order,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
   public function update(UpdateOrderRequest $request, Order $order)
    {
            $order->order_date = $request->order_date;
            $order->order_status = $request->order_status;
            $order->order_totalmoney = $request->order_totalmoney;
            $order->user_id = $request->user_id;
            $order->receiver_id = $request->receiver_id;

            $order->save();

            return response()->json(
                [
                    "message" => "update dữ liệu thành công",
                    "data" => $order,
                ]
            );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //$request->user()->can('delete',Order::class);

        $order->delete();

            return response()->json(
                [
                    "message" => "đã xóa thành công",
                    "data" => $order,
                ]
            );
    }
     public function SetStatusOrder(Order $order)
    {
        $order->order_status=1;
        $order->save();

            return response()->json(
                [
                    "message" => "đã xác nhận đơn hàng thành công",
                    "data" => $order,
                ]
            );
    }
    public function ShowReceiverByOrder(Order $order)
    {
        $receiver = $order->receiver()->get();
            return response()->json(
                [
                    "message" => "đã lấy thành công",
                    "data" => $receiver,
                ]
            );

}
 public function GetOrderDetailByOrder(Order $order)
    {
        $orderDetail = $order->orderDetails()->with('product')->get();

            return response()->json(
                [
                    "message" => "đã lấy thành công",
                    "data" => $orderDetail,
                ]
            );
    }
    //Trả về tổng doanh thu (order_totalmoney) và tổng số đơn hàng trong bảng orders.
    public function GetTotalOrder()
    {
        $data = [
            //Tính tổng tiền của tất cả các đơn hàng.
            'order_sum' => Order::sum('order_totalmoney'),
            //Đếm tổng số đơn hàng có trong bảng orders.
            'order_count' => Order::count(),
        ];

            return response()->json(
                [
                    "message" => "đã lấy thành công",
                    "data" => $data,
                ]
            );
    }
    public function GetTotalOrderByTime(Request $request)
    {
        //nhận vào 2 dữ liệu 1 là sẽ thống kê theo j 2. năm bao nhiêu
        //năm cần thống kê
        $inputYear = $request->year;
        if ($inputYear < 1000) {
            // Xử lý để đưa về năm 4 chữ số
            $inputYear += 2000; // Hoặc xử lý theo cách khác tùy theo ngữ cảnh
        }
        $data=[];
        // Nếu client gửi option_time = true → Thống kê theo quý.
        // Nếu không có hoặc false → Thống kê theo tháng.
        if($request->option_time){
            //Chọn: quý (QUARTER(order_date)), năm (YEAR(order_date)), tổng doanh thu (SUM(order_totalmoney))
            $data = Order::select(DB::raw('QUARTER(order_date) as quarter, YEAR(order_date) as year, SUM(order_totalmoney) as sum'))
            //Điều kiện: đơn hàng nằm trong năm được yêu cầu (whereYear).
            ->whereYear('order_date', $inputYear)
            //Nhóm theo: năm và quý.
            ->groupBy(DB::raw('YEAR(order_date), QUARTER(order_date)'))
            ->get();
        }else{
            $data = Order::select(DB::raw('MONTH(order_date) as month, YEAR(order_date) as year, SUM(order_totalmoney) as sum'))
            ->whereYear('order_date',$inputYear)
            ->groupBy(DB::raw('YEAR(order_date), MONTH(order_date)'))
            ->get();      
        }
        return response()->json(
            [
                "message" => "đã lấy thành công",
                "data" => $data,
            ]
        );
        
    }
    public function GetTotalOrderByDate(Request $request)
    {
//Dùng để tạo một object trống chứa kết quả trả về (thay vì dùng array).
        $data = new \stdClass();
        // Lọc tất cả đơn hàng có ngày order_date nằm giữa start_date và end_date.
        // Rồi đếm số lượng (count()).
        $data->order_count = Order::whereBetween('order_date', [$request->start_date, $request->end_date])->count();
        
        $data->order_sum = Order::whereBetween('order_date', [$request->start_date, $request->end_date])->sum('order_totalmoney');

            return response()->json(
                [
                    "message" => "đã lấy thành công",
                    "data" => $data,
                ]
            );
    }

    public function getAll()
{
    $allOrders = Order::all();
    $completedOrders = Order::where('order_status', '1')->get();

    $totalRevenue = $completedOrders->sum('TotalPrice');
    $totalOrderCount = $allOrders->count();
    $completedOrderCount = $completedOrders->count();

    // Gom theo ngày
    $chartData = $completedOrders->groupBy(function ($order) {
        return Carbon::parse($order->order_date)->format('Y-m-d');
    })->map(function ($group, $date) {
        return [
            'date' => $date,
            'revenue' => $group->sum('TotalPrice'),
            'orders' => $group->count(),
        ];
    })->values();

    return response()->json([
        'totalRevenue' => $totalRevenue,
        'totalOrderCount' => $totalOrderCount,
        'completedOrderCount' => $completedOrderCount,
        'chartData' => $chartData,
    ]);
}

public function filter(Request $request)
{
    $from = Carbon::parse($request->input('from'))->startOfDay();
    $to = Carbon::parse($request->input('to'))->endOfDay();

    $orders = Order::where('order_status', '1')
                   ->whereBetween('order_date', [$from, $to])
                   ->get();
                   $allOrders = Order::whereBetween('order_date', [$from, $to])->get();
    $totalRevenue = $orders->sum('TotalPrice');
    $orderCount = $orders->count();
    $totalOrderCount = $allOrders->count();

    $chartData = $orders->groupBy(function ($order) {
        return Carbon::parse($order->order_date)->format('Y-m-d');
    })->map(function ($group, $date) {
        return [
            'date' => $date,
            'revenue' => $group->sum('TotalPrice'),
            'orders' => $group->count(),
        ];
    })->values();

    return response()->json([
        'totalRevenue' => $totalRevenue,
        'totalOrderCount' => $totalOrderCount,
        'completedOrderCount' => $orderCount,
        'chartData' => $chartData,
    ]);
}
}