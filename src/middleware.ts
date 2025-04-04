import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.headers.get("Authorization");
  if (!token) {
    return new NextResponse("No autorizado", { status: 401 });
  } else if (token !== "secreto") {

    return new NextResponse("No autorizado", { status: 401 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/admin/:path*", //...
};
