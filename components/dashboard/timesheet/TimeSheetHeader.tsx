import React, { FC } from 'react'
import ProgressBar from './ProgressBar'
import { Timesheet } from '@/types';

const TimeSheetHeader:FC<{timesheet:Timesheet, progressPercent:number}> = ({timesheet, progressPercent}) => {
    return (
        <div className="flex items-start justify-between mb-2">
            <div>
                <h1 className="text-base font-semibold text-gray-900">
                    {timesheet.status === "MISSING" ? "Create timesheet" : "This week's timesheet"}
                </h1>
                <p className="text-xs text-gray-400 mt-0.5">
                    {timesheet.date} &nbsp;·&nbsp; Week #{timesheet.week}
                </p>
            </div>
            <div>
                <span className="text-sm font-semibold text-gray-800">
                    {timesheet.loggedHours}/{timesheet.totalHours} hrs
                </span>
                <ProgressBar progressPercent={progressPercent} />
            </div>
        </div>
    )
}

export default TimeSheetHeader;