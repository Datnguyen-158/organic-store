<?php

namespace App\Http\Controllers;
use App\Models\ProductWeight;
use Illuminate\Http\Request;

class ProductWeightController extends Controller
{
    public function index()
    {
        $weights = ProductWeight::get();
        return response()->json($weights);
    }
        public function showWeightByProduct($productId)
    {
        $weights = ProductWeight::where('product_id', $productId)->get();
        return response()->json($weights);
    }
            public function show( string $Id)
    {
        $product_weights= ProductWeight::find($Id);
         if(!$product_weights){
            return response()->json([
            'success'=> true,
            'message'=>'Users not found'
        ]);
        }else{
  return response()->json([
            'success'=> true,
            'data'=>$product_weights,
            'message'=>'Users successfully'
        ]);
        }
    }

    // Thêm mới trọng lượng
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,product_id',
            'weight' => 'required|string|max:10',
            'product_price' => 'required|integer'
        ]);

        $weight = ProductWeight::create([
            'product_id' => $request->product_id,
            'weight' => $request->weight,
            'product_price' => $request->product_price,
        ]);

        return response()->json($weight, 201);
    }

    // Cập nhật trọng lượng
    public function update(Request $request, $id)
    {
        $request->validate([
            'weight' => 'sometimes|string|max:10',
            'product_price' => 'sometimes|integer',
        ]);

        $weight = ProductWeight::findOrFail($id);
        $weight->update($request->only(['weight', 'product_price']));

        return response()->json($weight);
    }

    // Xóa trọng lượng
    public function destroy($id)
    {
        $weight = ProductWeight::findOrFail($id);
        $weight->delete();

        return response()->json(['message' => 'Xóa thành công']);
    }
}
