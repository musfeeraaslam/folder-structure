import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import List from './components/List.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

function App() {

  return (
    <>

       <BrowserRouter>
        <Navbar/>
           <Routes>
                 <Route path="/" element={<Home/>}/>          
                 <Route path="/list" element={<List/>}/>          
                 <Route path="/register" element={<Register/>}/>          
                 <Route path="/login" element={<Login/>}/>          
           </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
