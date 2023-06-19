<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\ProductsModel;


class ProductsController extends Controller
{
    //
    public function Index(){
        $products = ProductsModel::all();
        return $products;
    }


    public function Delete($id){
        $products = ProductsModel::find($id);
        $products->delete();
    }

    public function Update(Request $request , $id){
        $products = ProductsModel::find($id);
        $products->name = $request->name; 
        $products->description = $request->description; 
        $products->price = $request->price; 
        $products->status = $request->status; 
        $products->save();
        return response()->json($request);
        
    }
}
