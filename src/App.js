import logo from './logo.svg';
import './App.css';
import Sidebar from "./Components/Sidebar.jsx"
import Products from "./Components/Products.jsx"
import { Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <div className='sidebar'>
        <Sidebar/>
     </div>
     <div className='content'>
      <Routes>
        <Route path ="/Products" element={<Products/>} />
      </Routes>
      
     </div>
    </div>
  );
}

export default App;
