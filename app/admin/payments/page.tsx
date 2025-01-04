// 'use client';

// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";

// // Define the Payment interface
// interface Payment {
//   id: number;
//   user: string;
//   amount: string;
//   status: string;
//   date: string;
// }

// export default function PaymentsPage(): JSX.Element {
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [filter, setFilter] = useState<string>("all");

//   useEffect(() => {
//     // Mock payment data
//     const mockPayments: Payment[] = [
//       { id: 1, user: "John Doe", amount: "$50.00", status: "Completed", date: "2025-01-01" },
//       { id: 2, user: "Jane Smith", amount: "$75.00", status: "Pending", date: "2025-01-02" },
//       { id: 3, user: "Mike Brown", amount: "$120.00", status: "Failed", date: "2025-01-03" },
//     ];
//     setPayments(mockPayments);
//   }, []);

//   // Filter payments
//   const filteredPayments =
//     filter === "all" ? payments : payments.filter((payment) => payment.status === filter);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <main className="flex-grow p-6 bg-gray-100">
//         <h1 className="text-2xl font-bold mb-6">Manage Payments</h1>

//         {/* Filters */}
//         <div className="mb-4">
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="all">All Payments</option>
//             <option value="Completed">Completed</option>
//             <option value="Pending">Pending</option>
//             <option value="Failed">Failed</option>
//           </select>
//         </div>

//         {/* Payments Table */}
//         <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr>
//               <th className="border-b p-4 text-left">User</th>
//               <th className="border-b p-4 text-left">Amount</th>
//               <th className="border-b p-4 text-left">Status</th>
//               <th className="border-b p-4 text-left">Date</th>
//               <th className="border-b p-4 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPayments.map((payment) => (
//               <tr key={payment.id}>
//                 <td className="border-b p-4">{payment.user}</td>
//                 <td className="border-b p-4">{payment.amount}</td>
//                 <td className="border-b p-4">
//                   <span
//                     className={`py-1 px-2 rounded text-white ${
//                       payment.status === "Completed"
//                         ? "bg-green-500"
//                         : payment.status === "Pending"
//                         ? "bg-yellow-500"
//                         : "bg-red-500"
//                     }`}
//                   >
//                     {payment.status}
//                   </span>
//                 </td>
//                 <td className="border-b p-4">{payment.date}</td>
//                 <td className="border-b p-4 text-center">
//                   {payment.status === "Completed" ? (
//                     <button
//                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//                       onClick={() => alert(`Refund issued for payment ID: ${payment.id}`)}
//                     >
//                       Refund
//                     </button>
//                   ) : (
//                     <button
//                       disabled
//                       className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
//                     >
//                       Refund
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }