'use client';

import Filters from "@/components/dashboard/Filters";
import TimesheetTable from "@/components/dashboard/TimeSheetTable";

const DashboardPage =() => {

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Your Timesheets
        </h2>

        <Filters />

        <TimesheetTable/>

      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6 mt-3">
        <p className="m-0 text-center text-xs text-gray-400 p-2">
          © 2024 tentwenty. All rights reserved.
        </p>
      </div>
    </div>
  );
}


export default DashboardPage;