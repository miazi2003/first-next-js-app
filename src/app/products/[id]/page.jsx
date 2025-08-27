// app/products/[id]/page.jsx
async function getProduct(id) {
  const res = await fetch(`/api/products/${id}`, { cache: "no-store" });
  // App Router server component-এ relative fetch চলেনা, তাই absolute দরকার:
  // সেফ অপশন:
  const base = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const r = await fetch(`${base}/api/products/${id}`, { cache: "no-store" });
  return r.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  if (!product?._id) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="opacity-90 mb-4">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
    </div>
  );
}
