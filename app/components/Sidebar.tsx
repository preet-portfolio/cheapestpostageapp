import { useState } from "react";
import CreateShipment from "./CreateShipment"; // Adjust path if needed

export default function Sidebar() {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-full p-4">
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveView("create-shipment")}
                className="block hover:text-gray-400 text-left w-full"
              >
                Create Shipment
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {activeView === "create-shipment" && <CreateShipment />}
      </main>
    </div>
  );
}