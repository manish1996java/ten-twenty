import { Task, TasksByDay } from '@/types';
import { Clock, MoreHorizontal, Plus } from 'lucide-react'
import React, { FC, memo } from 'react'

const Tasks: FC<{tasksByDay: TasksByDay, setShowModal: (val: boolean) => void }> = ({ tasksByDay, setShowModal, }) => {
    return (
        <div className="flex flex-col gap-6">
            {Object.entries(tasksByDay).map(([day, tasks]: [string, Task[]]) => (
                <div key={day} className='flex gap-12'>
                    <p className="text-sm min-w-4 font-semibold text-gray-700 mb-2 uppercase tracking-wide">{day}</p>
                    
                    <div className='flex-1'>
                        <div className="flex flex-col gap-2">
                            {tasks.map((task: Task) => (
                                <div key={task.id} className="flex items-center justify-between  rounded-lg px-4 py-2.5 border border-gray-200">
                                    <span className="text-sm text-gray-700 flex-1">{task.name}</span>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1 text-xs text-gray-400">
                                            <Clock size={12} /> {task.hours} hrs
                                        </div>
                                        <span className="text-xs bg-blue-50 text-blue-600 border border-blue-100 rounded px-2 py-0.5">
                                            {task.project}
                                        </span>
                                        <button className="text-gray-300 hover:text-gray-500">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button 
                        onClick={() => setShowModal(true)}
                        className=" mt-2 flex items-center justify-center gap-1.5 w-full border-2 border-dotted  bg-blue-100 border-blue-300 rounded-md py-2 text-sm text-blue-500 hover:border-blue-400 hover:text-blue-600 transition">
                                             <Plus size={13} /> Add new task
                                        </button>
                        {/* <button
                            onClick={() => setShowModal(true)}
                            className="mt-2 flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-700 transition"
                        >
                            <Plus size={13} /> Add new task
                        </button> */}
                    </div>   
                </div>
            ))}
        </div>
    )
}

export default memo(Tasks);