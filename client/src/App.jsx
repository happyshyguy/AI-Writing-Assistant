import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Editor from './Components/Editor';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  )
}
// temp text fro git commit 31 dec
export default App;
// change made for git testing part 2