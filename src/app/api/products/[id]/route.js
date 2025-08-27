import { connectDB } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";
import mongoose from "mongoose";

export async function GET(_req, { params }) {
  const { id } = params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Response.json({ message: "Invalid id" }, { status: 400 });
  }
  await connectDB();
  const product = await Product.findById(id);
  if (!product) return Response.json({ message: "Not found" }, { status: 404 });
  return Response.json(product);
}
