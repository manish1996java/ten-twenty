import { PaginatedResponse, TimesheetListItem } from "@/types";

export const getTimesheets =  async ({
  page,
  limit,
  sort,
  order,
}: {
  page: number;
  limit: number;
  sort: string;
  order: "asc" | "desc";
}): Promise<PaginatedResponse<TimesheetListItem>>  => {

  const url = `/api/timesheets?page=${page}&limit=${limit}&sort=${sort}&order=${order}`
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch timesheets");
  }

  return res.json();
}


export const getTimesheetById = async (id: number) => {
  const res = await fetch(`/api/timesheets/${id}`);
  if (!res.ok) throw new Error("Failed");
  return res.json();
}