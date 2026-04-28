export const TIMESHEET_STATUS = {
  COMPLETED: "COMPLETED",
  INCOMPLETE: "INCOMPLETE",
  MISSING: "MISSING",
} as const;

export type TimesheetStatus =
  (typeof TIMESHEET_STATUS)[keyof typeof TIMESHEET_STATUS];