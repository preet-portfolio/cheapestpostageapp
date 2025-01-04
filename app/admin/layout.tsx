import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/admin/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className="hover:text-gray-400">
              Manage Users
            </Link>
          </li>
          <li>
            <Link href="/admin/payments" className="hover:text-gray-400">
              Manage Payments
            </Link>
          </li>
          <li>
            <Link href="/admin/shipments" className="hover:text-gray-400">
              Manage Shipments
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" className="hover:text-gray-400">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}