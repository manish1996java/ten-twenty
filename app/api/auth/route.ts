import { NextResponse } from "next/server";
import { users } from "@/lib/mockData";

export async function POST(req: Request) {
  const body = await req.json();

  const user = users.find(
    (u) =>
      u.email === body.email && u.password === body.password
  );

  if (!user) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  return NextResponse.json(user);
}