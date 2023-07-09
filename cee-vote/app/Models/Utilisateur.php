<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    protected $fillable = ['nom', 'prenom', 'numero_carte', 'email', 'password', 'classe'];
}
