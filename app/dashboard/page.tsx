'use client';

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect if not signed in
    if (!isSignedIn) {
      router.push("/"); // Redirect to homepage or login page
    } else {
      setIsLoading(false); // Allow rendering once signed in
    }
  }, [isSignedIn, router]);

  // Display loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid mb-6"></div>
          <p className="text-xl font-semibold text-gray-800">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Helper function to get greeting based on the time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Render the dashboard content if authenticated
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Dashboard Header */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">
          {getGreeting()}, {user?.firstName || "User"}!
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Welcome back to your dashboard. Let's explore what's new today.
        </p>
      </div>

      {/* Interactive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all transform hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Manage Profile</h3>
          <p className="text-gray-500 mb-4">
            Update your personal details and configure settings.
          </p>
          <button
            onClick={() => window.open("/profile", "_blank")} // Opens in a new tab
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition-all"
          >
            Go to Profile
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all transform hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-green-600 mb-2">View Reports</h3>
          <p className="text-gray-500 mb-4">
            Check out detailed analytics and your recent activity.
          </p>
          <button
            onClick={() => window.open("/reports", "_blank")} // Opens in a new tab
            className="inline-block bg-green-600 text-white py-2 px-6 rounded-md font-medium hover:bg-green-700 transition-all"
          >
            View Reports
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all transform hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Help & Support</h3>
          <p className="text-gray-500 mb-4">
            Find answers to your questions and access resources.
          </p>
          <button
            onClick={() => window.open("/help", "_blank")} // Opens in a new tab
            className="inline-block bg-purple-600 text-white py-2 px-6 rounded-md font-medium hover:bg-purple-700 transition-all"
          >
            Get Help
          </button>
        </div>
      </div>

      {/* New Section - Extra Interaction */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
            <a
              href="/dashboard/create-shipment"
              target="_blank"
              className="block text-blue-600 hover:underline"
            >
              Create Shipment
            </a>
          </div>
          <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition">
            <a
              href="/dashboard/import-shipment"
              target="_blank"
              className="block text-green-600 hover:underline"
            >
              Import Shipment
            </a>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition">
            <a
              href="/dashboard/view-transactions"
              target="_blank"
              className="block text-yellow-600 hover:underline"
            >
              View Transactions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}