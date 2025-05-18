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
        Schema::table('products', function (Blueprint $table) {
            // Thay đổi cột 'product_img' để có thể nhận giá trị NULL
            $table->string('product_img')->nullable()->change();
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            // Hoàn tác thay đổi, đặt lại cột 'product_img' thành NOT NULL
            $table->string('product_img')->nullable(false)->change();
        });
    }
};
