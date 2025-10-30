import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profile.jsx'

function App() {
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 m-8">
      <Profile name="Optimus Prime" city="Cybertron" age={32} followers={80} likes={803} photos={1.4} />
    </div>


   
  )
}

export default App
