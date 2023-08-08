import logo from './logo.svg';
import './App.css';
import Home from './Home'

import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './login';
import { Singup } from './signup';
import { Student } from './student';

function App() {
  return (
   <Fragment>
    
 


    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />}>      </Route>
         <Route path="/login" element={<Login/>}>
           </Route>



           <Route path="/student" element={<Student/>}>    </Route>
           <Route path="/register" element={<Singup/>}>

           </Route>
          
       </Routes>
     </BrowserRouter></Fragment>
     
  
  );
}

export default App;
