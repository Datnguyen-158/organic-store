<?php

namespace App\Http\Controllers;
use App\Models\ProductDetail;
use App\Http\Requests\ProductDetailRequest;
use App\Http\Requests\UpdateProductDetailRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductDetailController extends Controller
{
     // Lấy tất cả chi tiết sản phẩm
    public function index()
    {
        $productDetail= ProductDetail::all();
       return response()->json([
        'success'=>true,
        'data'=>$productDetail,
        'message'=>'productDetail successfully!'
       ]);
    }
    public function store(Request $request)
{
    // Nếu có file ảnh, xử lý lưu file

    if ($request->hasFile('productDetail_image')) {
        $image = $request->file('productDetail_image');
        $imageName = time() . '_' . preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $image->getClientOriginalName());
        $image->move(public_path('uploads/productDetail'), $imageName);
        $imagePath = 'uploads/productDetail/' . $imageName;
    }
    $detail = ProductDetail::create(
        [
           'productDetail_image'=>$imagePath,
           'productDetail_desc'=>$request->productDetail_desc,
           'productDetail_content'=>$request->productDetail_content,
           'product_id'=>$request->product_id
        ]
    );

    return response()->json($detail, 201);
}
public function update(UpdateProductDetailRequest $request, $id)
{
    $detail = ProductDetail::findOrFail($id);

    // Xử lý ảnh nếu có upload mới
    if ($request->hasFile('productDetail_image')) {
        $file = $request->file('productDetail_image');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->storeAs('public/product-details', $filename);
        $request->merge(['productDetail_image' => $filename]);
    }

    $detail->update($request->all());

    return response()->json(['message' => 'Cập nhật thành công', 'data' => $detail], 200);
}
   public function show( string $id)
    {
        //
        $id = ProductDetail::find($id); // Tìm theo CategoryID

        if (!$id) {
            return response()->json([
                "message" => "Không tìm thấy danh mục",
                "data" => null
            ], 404);
        }
    
        return response()->json([
            "message" => "Hiển thị danh mục thành công",
            "data" => $id,
        ]);
    }
      public function destroy(string $id)
    {
        //
        $feedback = ProductDetail::find($id);
        

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



     public function ShowProductDetailByIdProduct(Product $product)
    {
        $allproductDetail = $product->productDetails;

        if(count($allproductDetail)>0){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $allproductDetail,
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
