import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState("pink");
   const colorClasses = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    black: "bg-black",
    purple: "bg-purple-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
  };
  return(
    <>
    <div className={`flex h-[100vh] justify-center items-center gap-3 ${colorClasses[color] || colorClasses.pink}`}>
      <button className='bg-red-500 rounded-2xl p-2 ' onClick={()=>{setcolor('red')}} >Red</button>
      <button className='bg-yellow-500 rounded-2xl p-2' onClick={()=>{setcolor('yellow')}}>Yellow</button>
      <button className='bg-black text-white rounded-2xl p-2'onClick={()=>{setcolor('black')}}>Black</button>
      <button className='bg-purple-500 rounded-2xl p-2' onClick={()=>{setcolor('purple')}}>Purple</button>
      <button className='bg-blue-500 rounded-2xl p-2' onClick={()=>{setcolor('green')}}>Green</button>
      <button className='bg-blue-500 rounded-2xl p-2' onClick={()=>{setcolor('blue')}}>Blue</button>
      <button className='bg-red-100 rounded-2xl p-2' onClick={()=>{setcolor('orange')}}>Default</button>
    </div>
    </>
  );
}

export default App
