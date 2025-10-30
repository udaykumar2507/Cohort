import React from 'react'

const MonthDropDown = () => {
  return (
    <>
    <div className="w-64 ">
  {/* <label htmlFor="month" className="block mb-2 text-sm font-medium text-gray-700">
    Select Month
  </label> */}
  <select
    id="month"
    className="block w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  >
    <option value="">Choose a month</option>
    <option value="jan">January</option>
    <option value="feb">February</option>
    <option value="mar">March</option>
    <option value="apr">April</option>
    <option value="may">May</option>
    <option value="jun">June</option>
    <option value="jul">July</option>
    <option value="aug">August</option>
    <option value="sep">September</option>
    <option value="oct">October</option>
    <option value="nov">November</option>
    <option value="dec">December</option>
  </select>
</div>

    </>
  )
}

export default MonthDropDown
