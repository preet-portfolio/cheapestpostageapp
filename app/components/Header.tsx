'use client';

import Link from "next/link";
import { SignInButton, SignUpButton, useUser, SignOutButton } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn, user } = useUser(); // Access user authentication state and metadata

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Cheapest Postage</Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 items-center">
          <Link href="/" className="hover:underline">
            Homepage
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>

          {/* Authenticated User Actions */}
          {isSignedIn ? (
            <>
              {/* Dashboard Button */}
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>

              {/* Logout Button */}
              <SignOutButton>
                <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
                  Logout
                </button>
              </SignOutButton>
            </>
          ) : (
            <>
              {/* Login Button */}
              <SignInButton redirectUrl="/dashboard">
                {/* This child button is for styling, but the `redirectUrl` logic is handled by `SignInButton` */}
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Login
                </button>
              </SignInButton>

              {/* Get Started Button */}
              <SignUpButton redirectUrl="/dashboard">
                {/* This child button is for styling, but the `redirectUrl` logic is handled by `SignUpButton` */}
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                  Get Started
                </button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}