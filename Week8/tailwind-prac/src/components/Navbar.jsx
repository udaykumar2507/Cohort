import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between gap-2 shadow-md p-4 mb-4'>
        <div className='flex gap-2'>
            <div className='text-2xl font-bold'>Payouts</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
            <div className='text-grey-100 text-xs mt-3'> How it works</div>
        </div>
        <div class="relative max-w-md mx-auto">
  <input
    type="search"
    placeholder="Search..."
    class="w-full py-3 pl-10 pr-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-xl shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-200"
  />
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg
      class="w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
    </div>
    </div>

        <div className='flex gap-2 mt-1'>
           <div className='rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-700'>
             <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.95 9.95 0 01-4-.845L3 20l1.845-4A9.95 9.95 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
           </div>
           <div className='rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-700'>
             <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
           </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
