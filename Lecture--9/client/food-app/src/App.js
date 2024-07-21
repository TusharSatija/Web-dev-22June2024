 import React from 'react'
 import Navbar from './component/Navbar' 
 import Food from './component/Food'
import { Routes,Route } from 'react-router-dom'
import Profile from './component/Profile'
import Banner from './component/Banner'
 const App = () => {
   return (
     <div> 
      <Navbar/>
        <Routes> 
          <Route path='/food' element={<Food/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        <Banner/>
     </div>
   )
 }
 
 export default App