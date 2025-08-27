"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">NextShop</Link>

        <nav className="flex items-center gap-4">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/dashboard/add-product" className="hover:underline">Add Product</Link>
          {status === "authenticated" ? (
            <button onClick={() => signOut()} className="px-3 py-1 border rounded">
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()} className="px-3 py-1 border rounded">
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
