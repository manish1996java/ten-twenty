"use client"


import StatusBadge from "./StatusBadge";
import { getAction } from "@/lib/timesheet";
import Pagination from "./Pagination";
import { useTimeSheets } from "@/hooks/useTimeSheet";
import { ArrowDown, ArrowDownUp, ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { TimesheetListItem } from "@/types";
import { useCallback } from "react";




export default function TimesheetTable() {
    const tableHeaders = ["week", "date", "status"];
    const router = useRouter();

    const {
        data: tableData,
        page,
        perPage,
        totalPages,
        setPage,
        setPerPage,
        handleSort,
        sortKey,
        order,
    } = useTimeSheets();


    const handleStatusClick = useCallback((id:number) => {
        console.log("handleStatusClick",id);
        router.push(`/dashboard/${id}`);
    },[router]);


    return (
        <>
            <div className="overflow-x-auto  rounded-lg shadow">
                <table className="w-full text-sm">
                    <thead className="text-gray-500 border-b border-gray-200 bg-gray-50 ">
                        <tr className="">
                            {tableHeaders.map((header, i) => {
                                const isActive = sortKey === header;
                                return (
                                    <th key={header} className="text-left py-3 px-2 text-xs" onClick={() => handleSort(header)}>{header?.toUpperCase()} {i == 0 && "#"}  {isActive ? (order === "asc" ? <ArrowUp className="inline" size={12} /> : <ArrowDown className="inline" size={12} />) : <ArrowDownUp className="inline" size={12} />}</th>
                                )
                            })}
                            {/* <th className="text-left py-2" onClick={() => handleSort('date')}>DATE</th>
                            <th className="text-left py-2" onClick={() => handleSort('status')}>STATUS</th> */}
                            <th className="text-right py-3 px-2 text-xs" >ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-500">
                        {tableData.map((item: TimesheetListItem) => {
                            const status:string = getAction(item.status)
                            return (
                                <tr key={item.week} className="border-b border-gray-200">
                                    <td className="py-3 px-2 bg-gray-50 w-[10%]">{item.week}</td>
                                    <td className="py-3 px-2 w-[50%]">{item.date}</td>

                                    <td className="py-3 px-2">
                                        <StatusBadge status={item.status} />
                                    </td>

                                    <td className="text-right py-3 px-2">
                                        <button className="text-blue-600 hover:underline text-sm" onClick={()=>handleStatusClick(item.id)}>
                                            {status}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination perPageList={[5, 10, 15, 20]} page={page} totalPages={totalPages} perPage={perPage} setPage={setPage} setPerPage={setPerPage} />
        </>
    );
}