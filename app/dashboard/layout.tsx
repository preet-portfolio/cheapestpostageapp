'use client';

import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-full p-4">
        <nav>
          <ul className="space-y-4">
            {/* Existing Options */}
            <li>
              <Link href="/dashboard" className="block hover:text-gray-400">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="block hover:text-gray-400">
                Settings
              </Link>
            </li>

            {/* Separator */}
            <hr className="border-gray-600 my-4" />

            {/* New Shipment Options */}
            <li>
              <Link href="/components/CreateShipment" className="block hover:text-gray-400">
                Create Shipment
              </Link>
            </li>
            <li>
              <Link href="/dashboard/import-shipment" className="block hover:text-gray-400">
                Import Shipment
              </Link>
            </li>

            {/* Separator */}
            <hr className="border-gray-600 my-4" />

            {/* Additional Options */}
            <li>
              <Link href="/dashboard/view-shipments" className="block hover:text-gray-400">
                View All Shipments
              </Link>
            </li>
            <li>
              <Link href="/dashboard/view-transactions" className="block hover:text-gray-400">
                View All Transactions
              </Link>
            </li>
            <li>
              <Link href="/dashboard/help" className="block hover:text-gray-400">
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}