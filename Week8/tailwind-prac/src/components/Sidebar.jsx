import { Home, Package, Truck, BarChart, Wallet, Percent, Users, Brush, Plug } from "lucide-react";
import React from 'react';
const menuItems = [
  { icon: Home, label: "Home" },
  { icon: Package, label: "Orders" },
  { icon: Truck, label: "Delivery" },
  { icon: BarChart, label: "Analytics" },
  { icon: Wallet, label: "Payouts" },
  { icon: Percent, label: "Discounts" },
  { icon: Users, label: "Audience" },
  { icon: Brush, label: "Appearance" },
  { icon: Plug, label: "Plugins" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1C2434] text-gray-300 h-screen flex flex-col p-4 space-y-4">
      <h1 className="text-2xl font-semibold text-white mb-4">Nishyan</h1>
      {menuItems.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2C3446] cursor-pointer">
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
