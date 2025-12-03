import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware() {
  // const token = req.cookies.get("auth_token");

  // const isAuthenticated = Boolean(token);
  // const { pathname } = req.nextUrl;

  // if (!isAuthenticated && pathname !== "/user/login") {
  //   return NextResponse.redirect(new URL("/user/login", req.url));
  // }

  // if (isAuthenticated && pathname === "/user/login") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
