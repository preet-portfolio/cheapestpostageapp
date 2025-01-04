import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="h-full bg-gray-800 text-white flex flex-col p-4">
      {/* Existing Options */}
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <button
        onClick={() => router.push("/admin/overview")}
        className="hover:bg-gray-700 py-2 px-4 rounded-lg text-left"
      >
        Overview
      </button>
      <button
        onClick={() => router.push("/admin/settings")}
        className="hover:bg-gray-700 py-2 px-4 rounded-lg text-left mt-2"
      >
        Settings
      </button>

      {/* Separator */}
      <hr className="border-gray-600 my-4" />

      {/* New Shipment Options */}
      <h2 className="text-xl font-semibold mb-4">Shipments</h2>
      <button
        onClick={() => router.push("/admin/create-shipment")}
        className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-left text-white font-medium mb-2 transition"
      >
        Create Shipment
      </button>
      <button
        onClick={() => router.push("/admin/import-shipment")}
        className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg text-left text-white font-medium transition"
      >
        Import Shipment
      </button>

      {/* Separator */}
      <hr className="border-gray-600 my-4" />

      {/* Additional Options */}
      <h2 className="text-xl font-semibold mb-4">Tools</h2>
      <button
        onClick={() => router.push("/admin/view-shipments")}
        className="hover:bg-gray-700 py-2 px-4 rounded-lg text-left mb-2 transition"
      >
        View All Shipments
      </button>
      <button
        onClick={() => router.push("/admin/view-transactions")}
        className="hover:bg-gray-700 py-2 px-4 rounded-lg text-left mb-2 transition"
      >
        View All Transactions
      </button>
      <button
        onClick={() => router.push("/admin/help")}
        className="hover:bg-gray-700 py-2 px-4 rounded-lg text-left transition"
      >
        Help
      </button>
    </div>
  );
}