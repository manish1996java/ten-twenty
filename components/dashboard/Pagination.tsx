'use client';

import { getPageNumbers } from "@/lib/pagination";
import { FC, memo } from "react";



interface PaginationProps {
    perPageList?: number[];
    page: number;
    totalPages: number;
    perPage: number;
    setPage: (page: number) => void;
    setPerPage: (size: number) => void;
};


const Pagination: FC<PaginationProps> = ({ perPageList = [5], page, totalPages, perPage, setPage, setPerPage }) => {

    const pages = getPageNumbers(page, totalPages);
    return (
        <div className="block sm:flex items-center justify-between mt-4 text-sm text-gray-500">

            <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-2 py-1">
                {perPageList.map((value) => {
                    return (<option value={value} key={value}>{value} per page</option>)
                })}
            </select>

            <div className="flex items-center gap-1 mt-2 sm:mt-0">

                {/* Previous */}
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="px-3 py-1 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {pages.map((p, i) =>
                    p === '...'
                        ? (
                            <span key={`ellipsis-${i}`} className="px-2 py-1 text-gray-400 select-none">
                                ···
                            </span>
                        ) : (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                className={`px-3 py-1 rounded-md border text-sm font-medium transition-colors
                                    ${page === p
                                        ? 'bg-white border-blue-500 text-blue-600 font-semibold'
                                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {p}
                            </button>
                        )
                )}

                {/* Next */}
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="px-3 py-1 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Next
                </button>

            </div>

        </div>
    );
}

export default memo(Pagination);