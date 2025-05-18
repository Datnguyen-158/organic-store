<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
           Schema::create('productDetail', function (Blueprint $table) {
            $table->id();
            $table->string('productDetail_image')->nullable(); // ảnh sản phẩm
            $table->text('productDetail_desc')->nullable(); // mô tả ngắn
            $table->longText('productDetail_content')->nullable(); // nội dung chi tiết
            $table->unsignedBigInteger('product_id')->nullable(); // khóa ngoại
            $table->timestamps();

            // Liên kết với bảng categories nếu có
            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
       Schema::dropIfExists('productDetail');
    }
};
