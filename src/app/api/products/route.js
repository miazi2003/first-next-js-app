import { connectDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "0", 10);
  const products = await Product.find().sort({ createdAt: -1 }).limit(limit);
  return Response.json(products);
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { name, description, price } = body;

  if (!name || typeof price !== "number") {
    return Response.json(
      { message: "name এবং price (number) লাগবে" },
      { status: 400 }
    );
  }

  await connectDB();
  const product = await Product.create({
    name,
    description: description || "",
    price,
    createdBy: session.user?.email || session.user?.id || "",
  });

  return Response.json(product, { status: 201 });
}
