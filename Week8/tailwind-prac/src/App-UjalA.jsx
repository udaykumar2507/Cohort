import React from "react";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import TransactionTable from "./components/TransactionTable";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">Payouts Overview</h1>
        <div className="grid grid-cols-3 gap-6">
          <StatCard title="Next Payout" value="₹2,312.23" subText="Next Payment Date: Today, 4:00 PM" />
          <StatCard title="Amount Pending" value="₹92,312.20" subText="13 Orders" />
          <StatCard title="Amount Processede" value="₹23,92,312.19" />
        </div>
        <TransactionTable />
      </div>
    </div>
  );
}
