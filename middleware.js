import NextAuth from "next-auth";
import { config } from "./lib/auth.config";
export default NextAuth(config).auth

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
