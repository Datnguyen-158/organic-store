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
        Schema::create('receiver', function (Blueprint $table) {
            $table->increments('receiver_id');
            $table->integer('user_id');
            $table->string('receiver_name');
            $table->string('receiver_phone');
            $table->string('receiver_city');
            $table->string('receiver_district');
            $table->string('receiver_commune');
            $table->string('receiver_desc');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('receiver');
    }
};
