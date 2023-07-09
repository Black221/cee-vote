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
        Schema::create('utilisateurs', function (Blueprint $table) {
        
            $table->increments("id");
            $table->string("password");

            $table->string("nom");
            $table->string("prenom");
            $table->string("email")->unique("email_key");

            $table->string("numero_carte", 9)->unique("numero_carte_key");
            $table->string("classe");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};
