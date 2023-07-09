<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use App\Models\Poste;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class CandidatController extends Controller
{
    public function index()
    {
        $candidats = Candidat::all();
        $res = [];

        foreach ($candidats as $candidat) {
            $utilisateur = Utilisateur::where("numero_carte", $candidat['numero_carte'])->firstOrFail();
            $poste = Poste::find($candidat['poste']);

            $res[count($res)] = ["candidat" => $utilisateur, "poste" => $poste];
        }

        return $res;
    }
 
    public function show($id)
    {
        $candidat = Candidat::find($id);

        if (!isset($candidat)) 
            return [];

        $utilisateur = Utilisateur::where("numero_carte", $candidat['numero_carte'])->firstOrFail();
        $poste = Poste::find($candidat['poste']);

        return ["candidat" => $utilisateur, "poste" => $poste];
    }

    public function store(Request $request)
    {
        return Candidat::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $candidat = Candidat::findOrFail($id);
        $candidat->update($request->all());

        return $candidat;
    }

    public function delete(Request $request, $id)
    {
        $candidat = Candidat::findOrFail($id);
        $candidat->delete();

        return 204;
    }
}
