import React from 'react'

const RevenueCard = ({
    title,
    amount,
    orderscount
}) => {
  return (
    <>
    <div className = 'bg-white-100 shadow-md p-2 w-full rounded-lg'>
        <div className='flex p-2 text-sm justify-start gap-1'>
            <div>{title}</div>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1 "><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
        </div>
        <div className='flex justify-between p-2'>
            <div className='flex'>
            <p class="text-xl font-sans italic font-bold">₹{amount}</p>
            </div>
            <div className='flex'>
                <div className='text-grey underline'>{orderscount>0 ?<div>{orderscount} order(s)</div> : <div>0</div>
                }</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </div>
        </div>
    </div>
    </>
  )
}

export default RevenueCard
