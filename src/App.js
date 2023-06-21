import logo from './logo.svg';
import './App.css';
import Sidebar from "./Components/Sidebar.jsx"
import Products from "./Components/Products.jsx"
import Add from "./Components/Add.jsx"
import AddCate from "./Components/AddCate.jsx"
import Categories from "./Components/Categories.jsx"
import Login from "./Components/Login/Login.jsx"

import { Routes , Route } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {
  const [login , setlogin] = useState(false)
  useEffect(()=>{

  },[])
  return (
    <div className="App">
      { login ? 
      <>        <div className='sidebar'>
        <Sidebar/>
     </div>
     <div className='content'>
      <Routes>
        <Route path ="/Products" element={<Products/>} />
        <Route path ="/Add" element={<Add/>} />
        <Route path ="/AddCate" element={<AddCate/>} />
        <Route path ="/Categories" element={< Categories />}  />
        <Route path ="/Login" element={<Login />}  />
      </Routes>
      
     </div>
     </>:<Login setlogin={setlogin}/>
      }
     
    </div>
  );
}

export default App;
