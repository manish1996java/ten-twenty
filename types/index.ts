import { TimesheetStatus } from "@/constants/timehseet";

export interface Task {
  id: number;
  day: string;
  name: string;
  hours: number;
  project: string;
  type: string;
}


export type TasksByDay = Record<string, Task[]>;

export interface Timesheet {
  id: number;
  week: number;
  date: string;
  status: TimesheetStatus;
  loggedHours: number;
  totalHours: number;
  tasks: Task[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
}

export interface User {
  id: number;
  email: string;
  password: string;
}

export type TimesheetListItem = Omit<Timesheet, "tasks">;