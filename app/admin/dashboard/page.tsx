'use client';

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { isSignedIn, user } = useUser(); // Access user authentication state
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if the user is not signed in
    if (!isSignedIn) {
      router.push("/auth/login"); // Redirect safely
    }
  }, [isSignedIn, router]);

  // Wait for redirect if the user is not signed in
  if (!isSignedIn) {
    return null; // Prevent rendering until signed-in state is resolved
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Welcome to Your Admin Dashboard</h1>
      <p className="mt-4 text-lg text-gray-600">
        Hello, {user?.fullName || "Admin"}! 👋
      </p>
      <p className="text-gray-600">This is the admin dashboard overview.</p>
    </div>
  );
}