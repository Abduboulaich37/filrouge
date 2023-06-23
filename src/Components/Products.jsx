import React, { useEffect , useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBInput, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import UpdateProduct from './UpdateProduct';
import logo from './Images/Laptop.jpg';
import { useNavigate } from 'react-router-dom';


export default function Product() {

  const [searchTerm , setsearchTerm] = useState('')
    const [product , setProduct] = useState([])
    const NavigateTo = useNavigate();
  
    const products = async ()=>{
        console.log('test')
        const res = await axios.get('http://127.0.0.1:8000/api/products');
        setProduct(res.data)
    }

  
    const deleteProduct = async (id) =>{
        console.log(id)
        const response = await axios.delete(`http://127.0.0.1:8000/api/deleteproducts/${id}`)
        console.log("xdid")
        window.location.reload(true)
        NavigateTo("/Products");


}

    useEffect(()=>{
        products()
    },[])

console.log(product)
  return (
    <div className='table'>
      <label for="Name">Searchbar</label>
      <MDBInput type='text' name='name' onChange={event => {setsearchTerm(event.target.value)}} className='mb-4' id='form5Example1'  />
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>  
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Price</th>
          <th scope='col'>Stock</th>
          <th scope='col'>Category</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
          {console.log(product)}
            {product ? product.map( Info =>
<>
<tr>
            
<td>
  <div className='d-flex align-items-center'>
    <img
      src={logo}
      alt=''
      style={{ width: '45px', height: '45px' }}
      className='rounded-circle'
    />
    <div className='ms-3'>
      <p className='fw-bold mb-1'>{Info.name}</p>
    </div>
  </div>
</td>
<td>
  <p className='fw-normal mb-1'>{Info.description}</p>
</td>
<td>
<p className='fw-normal mb-1'>{Info.price}</p>

</td>
<td>
  
    {Info.status == 1 ? 
    <MDBBadge color='success' pill>
    Active
  </MDBBadge>: <MDBBadge color='danger' pill>
    Inactive
  </MDBBadge>
    }
  
</td>
<td>
<p className='fw-normal mb-1'>{Info.categories.name}</p>  
            

</td>
<td>

    <UpdateProduct data={Info}/>
    <button  onClick={()=>deleteProduct(Info.id)} > 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
</button>
  </td>
<td>
  
</td>
<td>
</td>
</tr>
</>
            ):""}
      </MDBTableBody>
    </MDBTable>
    </div>
  
    
  );
}