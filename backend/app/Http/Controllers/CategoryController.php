<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\Request;
use App\Models\Category;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    //    $category= Category::latest()->get();
       $category= Category::all();
       return response()->json([
        'success'=>true,
        'data'=>$category,
        'message'=>'Category successfully!'
       ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
     $category= new Category();
    //  $category-> fill($request->all());
     $category->category_name= $request->category_name;
     $category->save();
     return response()->json([
          'success'=>true,
        'data'=>$category,
        'message'=>'Category created successfully!'
     ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category= Category::find($id);
         if(!$category){
            return response()->json([
            'success'=> true,
            'message'=>'Users not found'
        ]);
        }else{
  return response()->json([
            'success'=> true,
            'data'=>$category,
            'message'=>'Users successfully'
        ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->category_name=$request->category_name;
        $category->save();
        return response()->json([
            'success'=> true,
            'data'=>$category,
            'message'=>'Users updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category=Category::find($id);
        if(!$category){
            return response()->json([
  [
                'message'=>'Not found'
            ]
  ],404);
          
        }
        $category->delete();
     
 return response()->json([
  [
                'message'=>'Delete successfully!'
            ]
  ]);
        
    }
    public function ShowProducts(Category $category)
    {
        //  $category->products sẽ trả về toàn bộ danh sách sản phẩm thuộc danh mục đó.
        $allproduct = $category->products;

        if(count($allproduct)>0){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $allproduct,
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
