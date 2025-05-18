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
            Schema::create('news', function (Blueprint $table) {
            $table->id('new_id'); // Tạo cột id tự tăng
            $table->string('new_title'); // Tiêu đề tin tức
            $table->text('new_content'); // Nội dung tin
            $table->string('new_img')->nullable(); // Đường dẫn ảnh, có thể null
            $table->timestamps(); // Tạo created_at và updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
           Schema::dropIfExists('news');
    }
};
