import { userCredential } from "@/constants/userCredential";

export const users = [
    { id: 1, email: userCredential.email, password: userCredential.password },
];

export const timesheets = [
  { 
    id: 1, 
    week: 1, 
    date: "1 - 5 January, 2024", 
    status: "COMPLETED",
    loggedHours: 30,
    totalHours: 40,
    tasks: [
      { id: 1, day: "Jan 1", name: "Homepage Development", hours: 4, project: "Project Name", type: "Design" },
      { id: 2, day: "Jan 1", name: "API Integration",      hours: 4, project: "Project Name", type: "Dev" },
      { id: 3, day: "Jan 2", name: "Bug Fixes",            hours: 4, project: "Project Name", type: "Dev" },
      { id: 4, day: "Jan 3", name: "Code Review",          hours: 4, project: "Project Name", type: "Dev" },
      { id: 5, day: "Jan 4", name: "Testing",              hours: 4, project: "Project Name", type: "QA" },
    ]
  },
  { 
    id: 2, 
    week: 2, 
    date: "8 - 12 January, 2024", 
    status: "COMPLETED",
    loggedHours: 40,
    totalHours: 40,
    tasks: [
      { id: 6, day: "Jan 8",  name: "Homepage Development", hours: 8, project: "Project Name", type: "Design" },
      { id: 7, day: "Jan 9",  name: "API Integration",      hours: 8, project: "Project Name", type: "Dev" },
      { id: 8, day: "Jan 10", name: "Bug Fixes",            hours: 8, project: "Project Name", type: "Dev" },
      { id: 9, day: "Jan 11", name: "Code Review",          hours: 8, project: "Project Name", type: "Dev" },
      { id: 10, day: "Jan 12", name: "Testing",             hours: 8, project: "Project Name", type: "QA" },
    ]
  },
  { 
    id: 3, 
    week: 3, 
    date: "15 - 19 January, 2024", 
    status: "INCOMPLETE",
    loggedHours: 20,
    totalHours: 40,
    tasks: [
      { id: 11, day: "Jan 15", name: "Homepage Development", hours: 4, project: "Project Name", type: "Design" },
      { id: 12, day: "Jan 16", name: "API Integration",      hours: 4, project: "Project Name", type: "Dev" },
      { id: 13, day: "Jan 17", name: "Bug Fixes",            hours: 4, project: "Project Name", type: "Dev" },
      { id: 14, day: "Jan 18", name: "Code Review",          hours: 4, project: "Project Name", type: "Dev" },
      { id: 15, day: "Jan 19", name: "Testing",              hours: 4, project: "Project Name", type: "QA" },
    ]
  },
  { id: 4,  week: 4,  date: "22 - 26 January, 2024",         status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 5,  week: 5,  date: "29 January - 2 February, 2024", status: "MISSING",    loggedHours: 0,  totalHours: 40, tasks: [] },
  { id: 6,  week: 6,  date: "5 - 9 February, 2024",          status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 7,  week: 7,  date: "12 - 16 February, 2024",        status: "INCOMPLETE", loggedHours: 16, totalHours: 40, tasks: [] },
  { id: 8,  week: 8,  date: "19 - 23 February, 2024",        status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 9,  week: 9,  date: "26 February - 1 March, 2024",   status: "MISSING",    loggedHours: 0,  totalHours: 40, tasks: [] },
  { id: 10, week: 10, date: "4 - 8 March, 2024",             status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 11, week: 11, date: "11 - 15 March, 2024",           status: "INCOMPLETE", loggedHours: 24, totalHours: 40, tasks: [] },
  { id: 12, week: 12, date: "18 - 22 March, 2024",           status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 13, week: 13, date: "25 - 29 March, 2024",           status: "MISSING",    loggedHours: 0,  totalHours: 40, tasks: [] },
  { id: 14, week: 14, date: "1 - 5 April, 2024",             status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 15, week: 15, date: "8 - 12 April, 2024",            status: "INCOMPLETE", loggedHours: 20, totalHours: 40, tasks: [] },
  { id: 16, week: 16, date: "15 - 19 April, 2024",           status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 17, week: 17, date: "22 - 26 April, 2024",           status: "MISSING",    loggedHours: 0,  totalHours: 40, tasks: [] },
  { id: 18, week: 18, date: "29 April - 3 May, 2024",        status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 19, week: 19, date: "6 - 10 May, 2024",              status: "INCOMPLETE", loggedHours: 12, totalHours: 40, tasks: [] },
  { id: 20, week: 20, date: "13 - 17 May, 2024",             status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 21, week: 21, date: "20 - 24 May, 2024",             status: "MISSING",    loggedHours: 0,  totalHours: 40, tasks: [] },
  { id: 22, week: 22, date: "27 - 31 May, 2024",             status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 23, week: 23, date: "3 - 7 June, 2024",              status: "INCOMPLETE", loggedHours: 8,  totalHours: 40, tasks: [] },
  { id: 24, week: 24, date: "10 - 14 June, 2024",            status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 25, week: 25, date: "17 - 21 June, 2024",            status: "MISSING",    loggedHours: 0,  totalHours: 40, tasks: [] },
  { id: 26, week: 26, date: "24 - 28 June, 2024",            status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 27, week: 27, date: "1 - 5 July, 2024",              status: "INCOMPLETE", loggedHours: 16, totalHours: 40, tasks: [] },
  { id: 28, week: 28, date: "8 - 12 July, 2024",             status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
  { id: 29, week: 29, date: "15 - 19 July, 2024",            status: "MISSING",    loggedHours: 0,  totalHours: 40, tasks: [] },
  { id: 30, week: 30, date: "22 - 26 July, 2024",            status: "COMPLETED",  loggedHours: 40, totalHours: 40, tasks: [] },
];