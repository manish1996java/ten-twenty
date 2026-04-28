// hooks/useTable.ts

import { useState, useMemo } from "react";
import { sortData, paginate } from "@/lib/table";

export const useTable = <T>(data: T[], initialPerPage = 5) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(initialPerPage);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const processedData = useMemo(() => {
    let result = [...data];

    if (sortConfig) {
      result = sortData(result, sortConfig);
    }

    return result;
  }, [data, sortConfig]);

  const { data: paginatedData, totalPages } = useMemo(() => {
    return paginate(processedData, page, perPage);
  }, [processedData, page, perPage]);

  const handleSort = (key: keyof T) => {
    setPage(1); // reset page

    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  return {
    data: paginatedData,
    page,
    perPage,
    totalPages,
    setPage,
    setPerPage,
    handleSort,
    sortConfig,
  };
}