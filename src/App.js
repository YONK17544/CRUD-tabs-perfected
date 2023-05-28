import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards'
import TabComponent from './pages/TabComponent';
import Users from './components/Users';


const App=()=>{
  
  return(
    <div>
     <Routes>
      <Route path="/" element={<TabComponent/>}/>
      <Route path = "/users" element={<Users/>}/>
     </Routes>
      
    </div>
  )

}
export default App;