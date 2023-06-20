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
        $products->category_id = $request->category_id;
        $products->save();
        return response()->json($request);
        
    }

    public function Add(Request $request){
        $products = new ProductsModel;
        $products->name = $request->name; 
        $products->description = $request->description; 
        $products->price = $request->price; 
        $products->status = $request->status;
        $products->category_id = $request->category_id;
        $results=$products->save();
        if ($results){
            return ["Result"=>"Data has been saved"];
        }
        else
        {
            return ["Result"=>"error"];
        }
    }
}
