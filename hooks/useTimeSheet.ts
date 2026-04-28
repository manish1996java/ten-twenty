
import { getTimesheets } from "@/lib/api/timesheet";
import { TimesheetListItem } from "@/types";
import { useCallback, useEffect, useState } from "react";

export const useTimeSheets = () => {
  const [data, setData] = useState<TimesheetListItem[]|[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const [sortKey, setSortKey] = useState("week");
  const [order, setOrder] = useState<"asc" | "desc">("asc");



  useEffect(() => {
    async function fetchData() {

      const res = await getTimesheets({page, limit:perPage, sort:sortKey,order})
      const result = await res;

      setData(result.data);
      setTotalPages(Math.ceil(result.total / perPage));
    }

    fetchData();
  }, [page, perPage, sortKey, order]);


  const handleSort = useCallback((key: string) => {
  setPage(1);

  if (sortKey === key) {
    setOrder((o) => (o === "asc" ? "desc" : "asc"));
  } else {
    setSortKey(key);
    setOrder("asc");
  }
},[sortKey]);

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