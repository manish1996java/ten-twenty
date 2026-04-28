'use client';

import { FC } from "react";



interface PaginationProps {
    perPageList?: number[];
    page: number;
    totalPages: number;
    perPage: number;
    setPage: (page: number) => void;
    setPerPage: (size: number) => void;
};


function getPageNumbers(current: number, total: number): (number | '...')[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
    if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
    return [1, '...', current - 1, current, current + 1, '...', total];
}

const Pagination: FC<PaginationProps> = ({ perPageList = [5], page, totalPages, perPage, setPage, setPerPage }) => {

    const pages = getPageNumbers(page, totalPages);
    return (
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">

            <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-2 py-1">
                {perPageList.map((value) => {
                    return (<option value={value} key={value}>{value} per page</option>)
                })}
            </select>

            {/* <div className="flex items-center gap-2">
                <button>Previous</button>
                <button className="px-2 py-1 bg-gray-200 rounded">1</button>
                <button className="px-2 py-1">2</button>
                <button className="px-2 py-1 text-blue-600">3</button>
                <button className="px-2 py-1">4</button>
                <button className="px-2 py-1">Next</button>
            </div> */}

            <div className="flex items-center gap-1">

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

export default Pagination;