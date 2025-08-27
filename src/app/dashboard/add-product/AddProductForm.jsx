"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      description: form.get("description"),
      price: Number(form.get("price")),
    };

    setLoading(true);
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);

    if (res.ok) {
      toast.success("Product added!");
      router.push("/products");
    } else {
      const err = await res.json().catch(() => ({}));
      toast.error(err?.message || "Failed to add product");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border p-4 rounded-lg">
      <div>
        <label className="block mb-1">Name</label>
        <input name="name" required className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block mb-1">Description</label>
        <textarea name="description" rows={4} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block mb-1">Price</label>
        <input name="price" type="number" step="0.01" required className="w-full border px-3 py-2 rounded" />
      </div>
      <button
        disabled={loading}
        className="px-4 py-2 border rounded w-full"
      >
        {loading ? "Submitting..." : "Add Product"}
      </button>
    </form>
  );
}
