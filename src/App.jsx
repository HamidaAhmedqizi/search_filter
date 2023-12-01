import { useState } from 'react'
import './App.css'
import Data from './Data.json'
function App() {

  const[searchTerm,setSearchTerm]=useState("")
 return (
    <div className="container">
     <h1>Kurtlar Vadisi Konsey uyeleri</h1>
     <div className='inputContainer'>
<input className='search' type="text"  placeholder='Konsey uyelerini Giriniz...'
onChange={(e)=>setSearchTerm(e.target.value)}/>
     </div>
     <div className="dataContainer">
      {
        Data.filter((val)=>{
          if(searchTerm==""){
            return val
          }
        })
      }
     </div>
    </div>
  ) 
}

export default App
