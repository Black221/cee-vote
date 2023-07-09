<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;

class UtilisateurController extends Controller
{
    public function index()
    {
        return Utilisateur::all();
    }
 
    public function show($id)
    {
        return Utilisateur::find($id);
    }

    public function store(Request $request)
    {
        return Utilisateur::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $utilisateur = Utilisateur::findOrFail($id);
        $utilisateur->update($request->all());

        return $utilisateur;
    }

    public function delete(Request $request, $id)
    {
        $utilisateur = Utilisateur::findOrFail($id);
        $utilisateur->delete();

        return 204;
    }
}
