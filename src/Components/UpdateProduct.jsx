import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from 'axios';

export default function UpdateProduct(data) {
  const [centredModal, setCentredModal] = useState(false);
  const [formvalue , setformvalue] = useState({
    
    id : data.data ? data.data.id : "" , 
    name : data.data ? data.data.name : "" , 
    description : data.data ? data.data.description : "" , 
    price : data.data ? data.data.price : "" ,
    status : data.data ? data.data.status : "" , 
    categoriename : data.data ? data.data.categories.name : "" ,
    

  })

  const [allCategories, setCategories] = useState([]);

  const categories = async ()=>{
    console.log('test')
    const res = await axios.get('http://127.0.0.1:8000/api/Categories');
    setCategories(res.data)
}
useEffect(()=>{
  categories();
},[])
console.log(allCategories);

  const Updatedata = async (e,id) => {
    e.preventDefault()
    console.log(formvalue)
    const res = await axios.post(`http://127.0.0.1:8000/api/updateproducts/${id}`,formvalue)
    console.log(res.data)
    window.location.reload(true)
  }

  const handlechange = (event) =>{
    const {name , value} = event.target;
    setformvalue({...formvalue  ,[name]:value})
  }
  console.log(formvalue)

  const toggleShow = () => setCentredModal(!centredModal);
console.log(data)
  return (
    <>
    <button onClick={toggleShow}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
        <path  d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
        </svg>
    </button>

      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={handlechange} name='name' type="text" class="form-control" aria-describedby="emailHelp" value={formvalue.name} />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Description</label>
    <input  onChange={handlechange} name='description' type="text" class="form-control" aria-describedby="emailHelp" value={formvalue.description}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Price</label>
    <input  onChange={handlechange} name='price' type="text" class="form-control" aria-describedby="emailHelp" value={formvalue.price}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Status</label>
    <select onChange={handlechange} name="status" id="status">
    <option disabled>{formvalue.status == 1 ? "Active" : "Inactive"}</option>
    <option value="1">Active</option>
    <option value="0">Inactive</option>
  </select>
  <label for="exampleInputEmail1">Category</label>
    <select onChange={handlechange}  class="form-select" name="categoriename" id="categoriename">
      {allCategories.map((category)=>(
        <option value={category.id} >{category.name}</option>
      ))}
    {console.log(formvalue.categoriename)}
    
  </select>
  </div>
  <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <button onClick={(e)=>Updatedata(e,formvalue.id)}>Update</button>
            </MDBModalFooter>
  </form>

            </MDBModalBody>
          
            
          </MDBModalContent>
          
        </MDBModalDialog>
        
      </MDBModal>
      
    </>
  );
}