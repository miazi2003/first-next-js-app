// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">স্বাগতম NextShop-এ 🚀</h1>
        <p className="text-lg mb-6">
          পছন্দের প্রোডাক্ট দেখুন, ডিটেলস দেখুন, আর লগইন করলে নতুন প্রোডাক্ট যোগ করুন।
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/products" className="px-4 py-2 border rounded">See Products</Link>
          <Link href="/login" className="px-4 py-2 border rounded">Login</Link>
        </div>
      </section>

      {/* Product Highlights (স্ট্যাটিক ডেমো) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Product Highlights</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Headphone", price: 120, description: "Rich sound quality" },
            { name: "Smart Watch", price: 90, description: "Track your health" },
            { name: "Backpack", price: 45, description: "Everyday carry" },
          ].map((p, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm opacity-80">{p.description}</p>
              <p className="mt-2 font-bold">${p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
