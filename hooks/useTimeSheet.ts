
import { useEffect, useState } from "react";

export function useTimeSheets<T>() {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const [sortKey, setSortKey] = useState("week");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/timesheets?page=${page}&limit=${perPage}&sort=${sortKey}&order=${order}`
      );

      const result = await res.json();

      setData(result.data);
      setTotalPages(Math.ceil(result.total / perPage));
    }

    fetchData();
  }, [page, perPage, sortKey, order]);


  const handleSort = (key: string) => {
  setPage(1);

  if (sortKey === key) {
    setOrder((o) => (o === "asc" ? "desc" : "asc"));
  } else {
    setSortKey(key);
    setOrder("asc");
  }
};

  return {
    data,
    page,
    perPage,
    totalPages,
    sortKey,
    order,
    setPage,
    setPerPage,
    handleSort,
  };
}