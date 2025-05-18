<?php

namespace App\Http\Controllers;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */


   public function index(Request $request)
{
    \Log::info('Filter params:', $request->all());
    $query = Product::query();

    // Lọc theo danh mục nếu có category_id
    if ($request->has('category_id') && $request->category_id != null) {
        $query->where('category_id', $request->category_id);
    }

    // Lọc theo giá nếu có price (ví dụ dưới 100000)
    // Lọc theo nhiều khoảng giá
    if ($request->has('prices')) {
        $priceFilters = $request->prices;

        $query->where(function ($q) use ($priceFilters) {
            foreach ($priceFilters as $priceRange) {
                switch ($priceRange) {
                    case 1:
                        $q->orWhere('product_dsc', '<', 50000);
                        break;
                    case 2:
                        $q->orWhereBetween('product_dsc', [50000, 80000]);
                        break; 
                    case 3: 
                        $q->orWhereBetween('product_dsc', [80000, 100000]);
                        break;                       
                    case 4: 
                        $q->orWhereBetween('product_dsc', [100000, 150000]);
                        break;
                    case 5: 
                        $q->orWhere('product_dsc', '>', 150000);
                        break;
                }
            }
        });
    }
    $products = $query->get(); // hoặc paginate nếu muốn phân trang

    return response()->json([
        'success' => true,
        'data' => $products,
        'message' => 'Filtered products successfully!',
    ]);
}

    
     
public function store(Request $request)
{
    $category = Category::findOrFail($request->category_id);

    $imagePath = null; // giá trị mặc định nếu không có ảnh

    if ($request->hasFile('product_img')) {
        $file = $request->file('product_img');
        $extension = $file->getClientOriginalExtension();
        $file_name = $request->product_name . '.' . $extension;

        // Tạo đường dẫn lưu ảnh
        $uploadPath = 'uploads/categories/' . $category->category_name;
        $file->move(public_path($uploadPath), $file_name);

        // Gán lại đường dẫn vào request
        $imagePath = $uploadPath . '/' . $file_name;
    } else {
        \Log::warning('Không có ảnh product_img được gửi lên!');
    }

    // Tạo product
    $product = new Product();
    $product->product_name = $request->product_name;
    $product->product_price = $request->product_price;
    $product->product_quantity = $request->product_quantity;
    $product->category_id = $request->category_id;
    $product->product_dsc = $request->product_dsc;
    $product->product_discount = $request->product_discount ?? 0;
    $product->product_img = $imagePath; // Nếu không có ảnh, sẽ là null
    $product->save();

    return response()->json([
        'message' => 'Product created successfully',
        'data' => $product
    ], 201);
}

    
    

    
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $product= Product::find($id);
       if(!$product){
            return response()->json([
            'message'=>'Users not found'
        ],404);
        }
  return response()->json([
            'success'=> true,
            'data'=> $product,
            'message'=>'Users successfully'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
{
    try {
        // Lấy thông tin category hiện tại
        $category = Category::findOrFail($product->category_id);

        // Nếu có ảnh mới được upload
        if ($request->hasFile('product_img')) {
            $file = $request->file('product_img');

            // Xoá ảnh cũ nếu tồn tại
            $oldPath = public_path('uploads/categories/' . $category->category_name . '/' . $product->product_img);
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }

            // Đặt tên file mới
            $extension = $file->getClientOriginalExtension();
            $filterFile_name = time() . '-' . preg_replace('/[^A-Za-z0-9\-_.]/', '_', $request->product_name) . '.' . $extension;

            // Lưu ảnh mới vào thư mục
$file->move(public_path('uploads/categories/'.$category->category_name), $filterFile_name);

            // Cập nhật tên ảnh trong request
            $product->product_img = $filterFile_name;
        }

        // Cập nhật các trường thông tin khác
        $product->product_name = $request->product_name;
        $product->product_price = $request->product_price;
        $product->product_dsc = $request->product_dsc;
        $product->category_id = $request->category_id;
        $product->product_quantity = $request->product_quantity;
        $product->product_discount = $request->product_discount;
        

        $product->save();

        return response()->json([
            'message' => 'Đã cập nhật sản phẩm thành công.'
        ], 200);

    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Lỗi khi cập nhật sản phẩm: ' . $e->getMessage()
        ], 500);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $product= Product::find($id);
       if(!$product){
            return response()->json([
            'message'=>'Users not found'
        ],404);
        }
        $product->delete();
  return response()->json([
            'success'=> true,
            'message'=>'Users delete successfully'
        ]);
        
    }

    //Hàm này dùng để lấy thống kê top 6 sản phẩm bán chạy, hiển thị tên sản phẩm và tổng số lượng đã bán.
    public function HandleStatistical_Product()
    {
        //đang lấy thông tin chi tiết các sản phẩm được đặt hàng.
        $products = Product::join('order_details','order_details.product_id','=','products.product_id')
        //Chọn product_name (tên sản phẩm) và tổng số lượng sản phẩm đã bán (SUM(orderDetail_quantity)).
        ->select('product_name',DB::raw('SUM(orderDetail_quantity) as quantity'))                    
        ->groupBy('product_name')
        ->orderBy('quantity','desc')
        ->limit(6)
        ->get()
        ; 

        if($products){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $products,
                ]
            );
        }else{
            return response()->json(
                [
                    "message" => "lấy dữ liệu thất bại hoac ko co",
                ]
            );
        }
    }
//     Nhận khoảng thời gian từ người dùng.

// Truy vấn để thống kê sản phẩm bán được trong khoảng thời gian đó.

// Trả về top 6 sản phẩm bán chạy nhất kèm theo số lượng.


    public function HandleStatistical_ProductByDate(Request $request)
    {
        $products = Product::join('order_details','order_details.product_id','=','products.product_id')
        ->select('product_name',DB::raw('SUM(orderDetail_quantity) as quantity'))
        ->whereBetween('orderDetail_date', [$request->start_date, $request->end_date])                    
        ->groupBy('product_name')
        ->orderBy('quantity','desc')
        ->limit(6)
        ->get()
        ; 

        if($products){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $products,
                ]
            );
        }else{
            return response()->json(
                [
                    "message" => "lấy dữ liệu thất bại hoac ko co",
                ]
            );
        }
    }
    }
