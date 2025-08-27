"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/products";

  return (
    <div className="max-w-sm mx-auto border p-6 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="w-full px-4 py-2 border rounded"
      >
        Continue with Google
      </button>
    </div>
  );
}
