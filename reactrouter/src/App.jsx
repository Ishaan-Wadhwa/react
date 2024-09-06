// import { useState } from 'react'
//  reactLogo from './assets/react.svg'
//  viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import {Home} from "./Pages/Home";
import {Book} from "./Pages/Book";
function App() {
  return (
    <div>
     
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/book/1">book 1</Link>
          </li>
          <li>
            <Link to="/book/2"></Link>
          </li>
        </ul>
     

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/book/:id" element={<Book/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
