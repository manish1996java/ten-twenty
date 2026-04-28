import { NextResponse } from "next/server";
import { timesheets } from "@/lib/mockdata";

export async function GET(
    req: Request,
    { params }:  { params: Promise<{ id: string }> } 
) {
    const { id } = await params;

    const timesheet = timesheets.find((t) => t.id === Number(id));

    if (!timesheet) {
        return NextResponse.json(
            { error: "Timesheet not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(timesheet);
}