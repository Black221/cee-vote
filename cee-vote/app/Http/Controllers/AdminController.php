<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return Admin::all();
    }
 
    public function show($id)
    {
        return Admin::find($id);
    }

    public function store(Request $request)
    {
        return Admin::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $admin = Admin::findOrFail($id);
        $admin->update($request->all());

        return $admin;
    }

    public function delete(Request $request, $id)
    {
        $admin = Admin::findOrFail($id);
        $admin->delete();

        return 204;
    }
}
