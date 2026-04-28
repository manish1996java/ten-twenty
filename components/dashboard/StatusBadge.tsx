import { getStatusStyle } from "@/lib/timesheet";
import { memo } from "react";

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span className={`text-xs px-2 py-1 rounded-lg ${getStatusStyle(status)}`}>
      {status}
    </span>
  );
}

export default memo(StatusBadge);