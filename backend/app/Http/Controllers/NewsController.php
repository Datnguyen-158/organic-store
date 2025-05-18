<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    //
    public function index()
    {
        //
        $feedback = News::all();
        
        return response()->json([
            "message" => "đã lấy danh mục thành công",
            "data" => $feedback,
        ]);
    }
    public function store(Request $request)
    {
         $imagePath = null;

    if ($request->hasFile('new_img')) {
        $image = $request->file('new_img');
        $imageName = time() . '_' . preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $image->getClientOriginalName());
        $image->move(public_path('uploads/news'), $imageName);
        $imagePath = 'uploads/news/' . $imageName;
    }

    $news = News::create([
        'new_title' => $request->new_title,
        'new_content' => $request->new_content,
        'new_img' => $imagePath
    ]);

    return response()->json([
        'message' => 'Thêm tin tức thành công',
        'data' => $news,
        'image_url' => asset($imagePath)
    ]);
}
    
    public function update(Request $request,$category_id)
    {
        //
        $category = News::find($category_id);
        if (!$category) {
            return response()->json([
                "message" => "Không tìm thấy danh mục",
                "data" => null
            ], 404);
        }
    
        // Cập nhật dữ liệu
        $category->update($request->all());
    
        return response()->json([
            "message" => "Đã sửa danh mục thành công",
            "data" => $category,
        ]);
    }
    public function show($category_id)
    {
        //
        $Category = News::find($category_id); // Tìm theo CategoryID

        if (!$Category) {
            return response()->json([
                "message" => "Không tìm thấy danh mục",
                "data" => null
            ], 404);
        }
    
        return response()->json([
            "message" => "Hiển thị danh mục thành công",
            "data" => $Category,
        ]);
    }
    public function destroy(string $id)
    {
        //
        $feedback = News::find($id);
        

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
}