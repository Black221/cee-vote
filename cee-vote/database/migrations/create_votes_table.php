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
        Schema::create('votes', function (Blueprint $table) {
            $table->increments("id");
            
            $table->string("candidat");
            $table->foreign('candidat')->references('numero_carte')
                 ->on('candidats')->onDelete('cascade');
            
            $table->integer("poste");
            $table->foreign('poste')->references('id')
                ->on('postes')->onDelete('cascade');

            $table->string("utilisateur");
            $table->foreign('utilisateur')->references('numero_carte')
                ->on('utilisateurs')->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('votes');
    }
};
