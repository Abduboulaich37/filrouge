import React, { useEffect , useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import logo from './Images/Laptop.jpg';

export default function Category() {

    const [Category , setCategory] = useState([])
  
    const Categories = async ()=>{
        console.log('test')
        const res = await axios.get('http://127.0.0.1:8000/api/Categories');
        setCategory(res.data)
    }

  
    const deleteCategory = async (id) =>{
        console.log(id)
        const response = await axios.delete(`http://127.0.0.1:8000/api/deleteCategories/${id}`)
        console.log("xdid")
        window.location.reload(true)


}

    useEffect(()=>{
        Categories()
    },[])

console.log(Category)
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>  
          <th scope='col'>Name</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
          {console.log(Category)}
            {Category ? Category.map( Info =>
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
    <button  onClick={()=>deleteCategory(Info.id)} > 
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
  );
}