import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token");

  const isLogin = req.nextUrl.pathname.startsWith("/login");

  if (!token && !isLogin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};