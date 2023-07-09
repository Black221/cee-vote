<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function index()
    {
        return Vote::all();
    }
 
    public function show($id)
    {
        return Vote::find($id);
    }

    public function store(Request $request)
    {
        return Vote::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $vote = Vote::findOrFail($id);
        $vote->update($request->all());

        return $vote;
    }

    public function delete(Request $request, $id)
    {
        $vote = Vote::findOrFail($id);
        $vote->delete();

        return 204;
    }
}
