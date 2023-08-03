import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Red } from './components/Red';
import { Blue } from './components/Blue';
import { Home } from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <Routes>
     <Route path="/blue" element={<Blue />} />
     <Route path="/red" element={<Red />} />
     <Route path="/" element={<Home />} />
   </Routes>
      <div id="navbar">
      <Link to="/">home</Link>
      <Link to="/blue">blue</Link>
      <Link to="/red">red</Link>
      </div>
      <div id="main-section">{/* routes here */}</div>
    </div>
    </>
  )
}

export default App
