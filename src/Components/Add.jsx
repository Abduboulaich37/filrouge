import React, { useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const [AddProducts, setAddProducts]=useState({})
    const NavigateTo = useNavigate();
    const handlechange = (event) =>{
        const {name , value} = event.target;
        setAddProducts({...AddProducts  ,[name]:value})
      }
      console.log(AddProducts)
      const submitProduct = (e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/add", AddProducts);
        NavigateTo("/Products");
      }
  return (
    <form className='Add' onSubmit={submitProduct}>
         <label for="Name">Name</label>
      <MDBInput onChange={handlechange} name='name' className='mb-4' id='form5Example1'  />
      <label for="Description">Description</label>
      <MDBInput onChange={handlechange} name='description' wrapperClass='mb-4' id='description' />
      <label for="Price">Price</label>
      <MDBInput onChange={handlechange} name='price' wrapperClass='mb-4' id='description' />
      <label for="exampleInputEmail1">Status</label>
      <br />
    <select onChange={handlechange} class="form-select" name="status" id="status">
    <option value="1">Active</option>
    <option value="0">Inactive</option>
  </select>
  <br />

      <label for="category_id">Categorie</label>
      <MDBInput onChange={handlechange} wrapperClass='mb-4' name='category_id' id='category_id' />

      <MDBBtn type='submit' block>
        Add
      </MDBBtn>
    </form>
  );
}