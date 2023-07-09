<?php

namespace Database\Seeders;

use App\Models\Utilisateur;
use Illuminate\Database\Seeder;


class UtilisateursTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Utilisateur::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 20; $i++) {
            Utilisateur::create([
                'nom' => $faker->lastName,
                'prenom' => $faker->firstName,
                'email' => $faker->email,
                'numero_carte' => $faker->currencyCode,
                'password' => $faker->password,
                'classe' => "ESP..."
            ]);
        }
    }
}
