import { NextResponse } from "next/server";
import { timesheets } from "@/lib/mockdata";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 5);
  const sortKey = searchParams.get("sort") || "week";
  const order = searchParams.get("order") || "asc";

  // ✅ Step 1: sort data
  const sortedData = [...timesheets].sort((a, b) => {
    const aValue = a[sortKey as keyof typeof a];
    const bValue = b[sortKey as keyof typeof b];

    // handle string vs number
    if (typeof aValue === "string" && typeof bValue === "string") {
      return order === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    // number sorting
    return order === "asc"
      ? Number(aValue) - Number(bValue)
      : Number(bValue) - Number(aValue);
  });

  // ✅ Step 2: paginate AFTER sorting
  const start = (page - 1) * limit;
  const end = start + limit;

  const sliced = sortedData.slice(start, end);

  return NextResponse.json({
    data: sliced,
    total: timesheets.length,
  });
}