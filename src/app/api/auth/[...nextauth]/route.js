import NextAuth from "next-auth";
import { authOptions } from "../../../../../lib/authOptions"; // adjust depth

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };