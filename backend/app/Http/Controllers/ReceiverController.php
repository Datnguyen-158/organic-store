<?php

namespace App\Http\Controllers;
use App\Models\Receiver;
use App\Models\User;
use App\Http\Requests\ReceiverRequest;
use App\Http\Requests\UpdateReceiver;
use Illuminate\Http\Request;

class ReceiverController extends Controller
{
   public function index(){
 $get_receiver = Receiver::all();

        if(count($get_receiver)>0){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $get_receiver,
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
   public function show(string $id){
$receiver= Receiver::find($id);
if(!$receiver){
    return response()->json([
        'message'=>'Not found!'
    ]);
}else{
    return response()->json([
        'message'=>'Show successfully!',
        'data'=>$receiver
    ]);
};
   }
   public function store(Request $request){
    $receiver = new Receiver();
    if($receiver){
            $receiver->receiver_name = $request->receiver_name;
            $receiver->receiver_phone = $request->receiver_phone;
            $receiver->user_id = $request->user_id;
            $receiver->receiver_city = $request->receiver_city;
            $receiver->receiver_district = $request->receiver_district;
            $receiver->receiver_commune = $request->receiver_commune;
            $receiver->receiver_desc = $request->receiver_desc;
            $receiver->receiver_type = $request->receiver_type;
            $receiver->save();
           return response()->json(
                [
                    "message" => "đã thêm dữ liệu thành công",
                    "data" => $receiver,
                ]
            );

    }else{
            return response()->json(
                [
                    "message" => "thêm dữ liệu thất bại",
                ]
            );
        }
      

   }
    public function update(Request $request, Receiver $receiver)
    {
        $receiver->receiver_name = $request->receiver_name;
        $receiver->receiver_phone = $request->receiver_phone;
        $receiver->user_id = $request->user_id;
        $receiver->receiver_city = $request->receiver_city;
        $receiver->receiver_district = $request->receiver_district;
        $receiver->receiver_commune = $request->receiver_commune;
        $receiver->receiver_desc = $request->receiver_desc;
        $receiver->receiver_type = $request->receiver_type;



            $receiver->save();

            return response()->json(
                [
                    "message" => "update dữ liệu thành công",
                    "data" => $receiver,
                ]
            );
    }
    public function destroy(string $id)
    {
        //
        $feedback = Receiver::find($id);
        

    if (!$feedback) {
        return response()->json([
            "message" => "Không tìm thấy danh mục cần xóa"
        ], 404);
    }
        $feedback->delete();

        return response()->json([
            "message" => "đã xóa danh mục thành công"
        ]);
    }
     public function HandleStatus(User $user,$receiver_id)
    {
        //tìm kiếm th nào đang mặc định và chuyển đổi nó
        $user->receiver()->where('receiver_type',1)->update(['receiver_type' => 0]);
        // Đảm bảo duy nhất một receiver có receiver_type = 1.
        $user->receiver()->where('receiver_id',$receiver_id)->update(['receiver_type' => 1]);

            return response()->json(
                [
                    "message" => "đã cập nhập mặc định người dùng thành công",
                ]
            );
    }
    public function setDefaultAddress(Request $request, $userId, $addressId)
    {
        // Gọi phương thức setDefaultAddress để cập nhật địa chỉ
        $address = Receiver::setDefaultAddress($userId, $addressId);

        if ($address) {
            return response()->json([
                'status' => 'success',
                'message' => 'Default address updated successfully.',
                'data' => $address
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Address not found or invalid user.'
            ], 404);
        }
    }
    public function getDefaultAddress($userId)
    {
        // Lấy địa chỉ mặc định của người dùng
        $defaultAddress = Receiver::getDefaultAddress($userId);

        if ($defaultAddress) {
            return response()->json([
                'status' => 'success',
                'data' => $defaultAddress
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'No default address found.'
            ], 404);
        }
    }
    public function getByUser($UserID){
        $Receiver = Receiver::where('user_id', $UserID)->first();

        // Nếu có truyền ID danh mục cha thì lọc theo, ngược lại lấy tất cả
        return response()->json([
            "message" => "Đã lấy khách hàng",
            "data" => $Receiver,
        ]);
    }
   
   
}
