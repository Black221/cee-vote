<?php

namespace App\Http\Controllers;

use App\Models\Poste;
use Illuminate\Http\Request;

class PosteController extends Controller
{
    public function index()
    {
        return Poste::all();
    }
 
    public function show($id)
    {
        return Poste::find($id);
    }

    public function store(Request $request)
    {
        return Poste::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $poste = Poste::findOrFail($id);
        $poste->update($request->all());

        return $poste;
    }

    public function delete(Request $request, $id)
    {
        $poste = Poste::findOrFail($id);
        $poste->delete();

        return 204;
    }
}

