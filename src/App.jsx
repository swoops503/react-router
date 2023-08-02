import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { DerRed } from './components/Red';
import { DerBlue } from './components/Blue';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <Routes>
     <Route path="/blue" element={<DerBlue />} />
     <Route path="/red" element={<DerRed />} />
   </Routes>
      <div id="navbar">
      <Link to="/blue">der blue</Link>
      <Link to="/red">der red</Link>
      </div>
      <div id="main-section">{/* routes here */}</div>
    </div>
    </>
  )
}

export default App
