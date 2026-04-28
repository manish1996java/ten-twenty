"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTimesheetById } from "@/lib/api/timesheet";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";
import TaskFormModal from "@/components/dashboard/timesheet/TaskFormModal";
import TimeSheetHeader from "@/components/dashboard/timesheet/TimeSheetHeader";
import Tasks from "@/components/dashboard/timesheet/Tasks";
import { Task, TasksByDay, Timesheet } from "@/types";



const TimesheetDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.timesheetId);

  const [timesheet, setTimesheet] = useState<Timesheet|null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTimesheetById(id);
        if (!data) router.push("/dashboard");
        setTimesheet(data);
      } catch {
        // router.push("/dashboard");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id,router]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );

  if (!timesheet) return null;

  const tasksByDay = timesheet.tasks.reduce((acc: TasksByDay, task: Task) => {
      if (!acc[task.day]) acc[task.day] = [];
      acc[task.day].push(task);
      return acc;
    }, {} as TasksByDay);

  

  const progressPercent = Math.min((timesheet.loggedHours / timesheet.totalHours) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Link href="/dashboard" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition">
          <ChevronLeft size={16} /> Back to Timesheets
        </Link>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <TimeSheetHeader timesheet={timesheet} progressPercent={progressPercent} />



          {Object.keys(tasksByDay).length === 0 ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              No tasks yet. Add your first task below.
            </div>
          ) : (
            <Tasks tasksByDay={tasksByDay} setShowModal={setShowModal} />
          )}

          {Object.keys(tasksByDay).length === 0 && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-700 transition"
            >
              <Plus size={13} /> Add new task
            </button>
          )}
        </div>

        <p className="text-center text-xs text-gray-300 mt-8">© 2024 ticktock. All rights reserved.</p>
      </main>

      {showModal && (
        <TaskFormModal setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default TimesheetDetailPage;