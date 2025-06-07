<?php

namespace App\Http\Controllers;
use App\Http\Requests\CartRequest;
use Illuminate\Http\Request;
 use App\Models\Cart;
use App\Http\Requests\UpdateCartRequest;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
public function index()
    {
        $get_cart = Cart::join('products','carts.product_id','=','products.product_id')->get();

        if(count($get_cart)>0){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $get_cart,
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
       public function getCart($user_id)
    {
        $cartItems = Cart::with('product','product_weights')
                    ->where('user_id', $user_id)
                    ->get();

        return response()->json([
            'message' => 'Success',
            'data' => $cartItems
        ]);
    }
     public function removeFromCart($Cart_id)
    {

        $deleted = Cart::where('cart_id',$Cart_id)->delete();

    if ($deleted) {
        return response()->json(['message' => 'Item removed from cart']);
    }

    return response()->json(['message' => 'Item not found'], 404);
    }
 
     public function updateQuantity(Request $request)
{
    $cartItem = Cart::where('cart_id', $request->cart_id)->first();

    if (!$cartItem) {
        return response()->json(['message' => 'Item not found'], 404);
    }

    $cartItem->cart_quantity = $request->cart_quantity;
    $cartItem->save();

  return response()->json([
    'message' => 'Quantity updated',
    'cart' => $cartItem
]);
}

    /**
     * Store a newly created resource in storage.
     */
    public function addCart(Request $request)
    {
//  Lấy user hiện tại đang đăng nhập (thường dựa vào token).
        $user = $request->user_id;
        //  Tìm trong giỏ hàng của user xem đã có sản phẩm đó chưa (dựa vào product_id).
        $cart = cart::where('user_id', $user)
        ->where('product_id',$request->product_id)
        ->where('product_weights_id',$request->product_weights_id)
        ->first();
        if($cart){
            //  Cộng số lượng mới với số lượng cũ và cập nhật lại giỏ hàng.
             $cart->cart_quantity += $request->cart_quantity;
            $cart->save();
            return response()->json(
                [
                    "message" => "đã update dữ liệu thành công do sản phẩm này đã đc mua rồi",
                    "data" => $cart,
                ]
            );
        }else{
        $get_cart = new Cart();
            $get_cart->user_id = $request->user_id;
            $get_cart->product_id = $request->product_id;
            $get_cart->cart_quantity = $request->cart_quantity;
            $get_cart->product_weights_id = $request->product_weights_id;
            $get_cart->save();
            return response()->json(
                [
                    "message" => "đã thêm dữ liệu thành công",
                    "data" => $get_cart,
                ]
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
     public function update(UpdateCartRequest $request, Cart $cart)
    {
            $cart->user_id = $request->user_id;
            $cart->product_id = $request->product_id;
            $cart->cart_quantity = $request->cart_quantity;
            $cart->cart_totalmoney = $request->cart_totalmoney;

            $cart->save();
            return response()->json(
                [
                    "message" => "đã update thành công",
                    "data" => $cart,
                ]
            );
    }

    /**
     * Remove the specified resource from storage.
     */
     public function destroy(Cart $cart)
    {
        $cart->delete();

        return response()->json(
            [
                "message" => "đã xóa thành công",
                "data" => $cart,
            ]
        );        
    }
}
