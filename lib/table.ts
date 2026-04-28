export const paginate = <T>(
  data: T[],
  page: number,
  perPage: number
) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    data: data.slice(start, end),
    totalPages: Math.ceil(data.length / perPage),
  };
}

export const sortData = <T>(
  data: T[],
  config: { key: keyof T; direction: "asc" | "desc" }
): T[] => {
  const { key, direction } = config;

  return [...data].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });
}