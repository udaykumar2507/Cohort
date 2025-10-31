import React from 'react';
export default function TransactionTable() {
  const data = [
    { id: "#281209", status: "Successful", txn: "TRX123456", date: "Today, 8:45 PM", amount: "₹1125.00" },
    { id: "#281210", status: "Processing", txn: "TRX789012", date: "Tomorrow, 9:00 AM", amount: "₹950.50" },
  ];

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 mt-4">
      <h3 className="text-lg font-semibold mb-3">Transactions | This Month</h3>
      <table className="w-full text-sm text-gray-600">
        <thead className="border-b text-gray-400">
          <tr>
            <th className="text-left py-2">Order ID</th>
            <th>Status</th>
            <th>Transaction ID</th>
            <th>Refund Date</th>
            <th>Order Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b last:border-none">
              <td className="py-2">{item.id}</td>
              <td>{item.status}</td>
              <td>{item.txn}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
