import { getStatusStyle } from "@/lib/timesheet";

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`text-xs px-2 py-1 rounded-lg ${getStatusStyle(status)}`}>
      {status}
    </span>
  );
}