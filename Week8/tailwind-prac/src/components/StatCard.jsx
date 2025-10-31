import React from 'react';
export default function StatCard({ title, value, subText }) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 w-full">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <div className="text-2xl font-semibold text-gray-800 mt-2">{value}</div>
      {subText && <p className="text-gray-400 text-xs mt-1">{subText}</p>}
    </div>
  );
}
