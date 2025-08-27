// app/products/page.jsx
export const dynamic = "force-dynamic"; // সবসময় ফ্রেশ ডেটা

async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL || ""}/api/products`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products?.map((p) => (
          <a
            key={p._id}
            href={`/products/${p._id}`}
            className="border p-4 rounded-lg block hover:shadow"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm opacity-80 line-clamp-2">{p.description}</p>
            <p className="mt-2 font-bold">${p.price}</p>
            <span className="inline-block mt-3 underline text-sm">Details</span>
          </a>
        ))}
      </div>
    </div>
  );
}
