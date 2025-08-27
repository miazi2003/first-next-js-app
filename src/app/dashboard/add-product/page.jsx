// app/dashboard/add-product/page.jsx
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import { redirect } from "next/navigation";
import AddProductForm from "./AddProductForm";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login?callbackUrl=/dashboard/add-product");
  }
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-semibold mb-4">Add a new product</h1>
      <AddProductForm />
    </div>
  );
}
