// export async function getTimesheets({
//   page,
//   limit,
// }: {
//   page: number;
//   limit: number;
// }) {
//   const res = await fetch(
//     `/api/timesheets?page=${page}&limit=${limit}`
//   );
//   return res.json();
// }
export async function getTimesheets({
  page,
  limit,
  sort,
  order,
}: {
  page: number;
  limit: number;
  sort: string;
  order: "asc" | "desc";
}) {
  const res = await fetch(
    `/api/timesheets?page=${page}&limit=${limit}&sort=${sort}&order=${order}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch timesheets");
  }

  return res.json();
}


export async function getTimesheetById(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/timesheets/${id}`);
  if (!res.ok) throw new Error("Failed");
  return res.json();
}