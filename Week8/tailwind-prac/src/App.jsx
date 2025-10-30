import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import RevenueCard from './components/RevenueCard';
import Navbar from './components/Navbar';
import MonthDropDown from './components/MonthDropDown';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>

    <div className='flex justify-between gap-4 p-4'>
      <div className='text-lg font-bold'>Overview</div>
      <MonthDropDown/>
    </div>
    <div className='grid grid-cols-3 gap-4 p-4'>
      <RevenueCard  title = "Total Revenue" amount = "1,42,312.20" orderscount={5} />
      <RevenueCard  title = "Amount Collected" amount = "50,000.00" orderscount={3} />
      <RevenueCard  title = "Amount Pending" amount = "92,312.20" orderscount={2} />
      <RevenueCard  title = "Amount Pending" amount = "92,312.20" orderscount={2} />
    </div>

    <div className=''>
      <p className='text-lg font-bold'>Transaction | This Month</p>
      
    </div>




    {/* <h1 className="text-4xl font-bold mb-4">Flex</h1>
    <div className="flex justify-around ">
      <div className='bg-red-500'>hi</div>
      <div className='bg-green-500'>hi</div>
      <div className='bg-yellow-500'>hi</div>
    </div>

    <h1 className="text-4xl font-bold mb-4">Grid</h1> 
    <div className='grid  grid-cols-10'>
      <div className='bg-red-500 col-span-4'>hi there im first</div> 
      <div className='bg-green-500 col-span-4'>hi there im second</div>
      <div className='bg-yellow-500 col-span-1'>hi there im third</div>
      <div className='bg-blue-500 col-span-1'>hi there im fourth</div>
    </div>
    
    <h1 className='text-4xl font-bold mb-4'>Responsiveness</h1>
    <div className ='bg-red-500 md:bg-green-600 text-white'>This one Changes to green when screen is greater than md size by default stays red</div> 


    <h1 className='text-4xl font-bold'>Example</h1>
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-red-500 col-span-1'>hi there im first</div>
      <div className='bg-green-500 col-span-1'>hi there im second</div>
      <div className='bg-yellow-500 col-span-1'>hi there im third</div>  
    </div> */}

     </>  
  )
}

export default App
