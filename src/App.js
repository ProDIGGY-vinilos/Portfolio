import React from 'react'
import About from 'components/About/About'
import Welcome from 'components/Welcome/Welcome'
import './App.css'
import Navbar from 'components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Welcome />
    </div>
  )
}

export default App
