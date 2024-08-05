import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/SignUp/Signup'
import Login from './Components/Login'
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Certirficate from './Pages/Certirficate';
import Learning from './Pages/Learning';
import NDA from './Pages/NDA';
import OfferLetter from './Pages/OfferLetter';
import ResumeBuilder from './Pages/ResumeBuilder';


function App() {
  const [data,setData] = useState([])
 

  const url = 'http://localhost:3000/users'

  return (
    

      <BrowserRouter>
      <Routes>
          <Route path='/' exact element={<Signup/>}/>
          <Route path="/login" element={<Login data = {data}/>} />
        
          <Route path='/home' element = {<Sidebar />}>
            <Route index element={<Dashboard/>} />
            <Route path="certificate" element={<Certirficate/>} />
            <Route path="Learning" element={<Learning/>} />
            <Route path="nda" element={<NDA/>} />
            <Route path="offerletter" element={<OfferLetter/>} />
            <Route path="resumebuilder" element={<ResumeBuilder/>} />
          </Route>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App
