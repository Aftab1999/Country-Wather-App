import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Details from './Components/Details';
import Country from './Components/Country';
 

function App() {
  return (
<>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Country/>} />
          <Route  path='/Details' element={<Details/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    <div>
    <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
       
    </div>
</>    
  );
}

export default App;
