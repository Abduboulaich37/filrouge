import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const NavigateTo = useNavigate();
    const [cat , setcat] = useState([])
    const [AddCate , setAddCate] = useState([])
    const categoreis = async () =>{
      const res = await axios.get('http://127.0.0.1:8000/api/Categories')
      setcat(res.data)
      console.log(res.data)
      
    }
    useEffect(()=>{
      categoreis();
    },[])
    const handlechange = (event) =>{
        const {name , value} = event.target
        setAddCate({...AddCate  ,[name]:value})
      }
      console.log(AddCate)
      const submitProduct = (e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/addcate", AddCate);
        NavigateTo("/Categories");
      }
    return (
    <form className='Add' onSubmit={submitProduct}>
         <label for="Name">Name</label>
      <MDBInput onChange={handlechange} name='name' className='mb-4' id='form5Example1'  />
      <MDBBtn type='submit' block>
        Add
      </MDBBtn>
    </form>
    );
}