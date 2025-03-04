'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => {
        console.log("Fetched tasks:", res.data);
        setTasks(res.data);
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const toggleCompletion = async (taskId: number, completed: boolean) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
        completed: !completed,
      });

      const updatedTasks = tasks.map((task: any) =>
        task.id === taskId ? { ...task, completed: !completed } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
        setTasks((prevTasks) => prevTasks.filter((task: any) => task.id !== taskId));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task: any) => task.completed).length;

  return (
    <main className="relative">
      {/* Create Task Button */}
      <div className="create-task-container">
        <button onClick={() => router.push("/create")} className="create-task-btn">
          Create Task
          <Image src="/plus.png" alt="Plus Icon" width={16} height={16} priority />
        </button>
      </div>

      {/* Task Summary */}
      <div className="task-summary">
        <div className="task-counter">
          Tasks
          <span className="counter">{totalTasks}</span>
        </div>
        <div className="task-completed">
          Completed
          <span className="counter">{completedTasks} of {totalTasks}</span>
        </div>
      </div>

      {/* Task List or Empty State */}
      <div className="grid gap-3 mt-6">
        {tasks.length > 0 ? (
          tasks.map((task: any) => (
            <div
              key={task.id}
              className="flex items-center justify-between w-full max-w-[736px] mx-auto bg-[#262626] p-4 rounded-lg"
            >
              {/* Checkbox (Does NOT navigate) */}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) => toggleCompletion(task.id, task.completed)}
                className="custom-radio mt-1"
                onClick={(e) => e.stopPropagation()} // Prevent navigation
              />

              {/* Clickable Task Title (Navigates) */}
              <div
                onClick={() => router.push(`/edit/${task.id}`)}
                className="flex-grow cursor-pointer px-3"
              >
                <p
                  className={`text-sm ${
                    task.completed ? "line-through text-gray-400" : "text-white"
                  }`}
                  style={{ color: task.color || "white" }} // Applies selected color to text
                >
                  {task.title}
                </p>
              </div>

              {/* Delete Button (Does NOT navigate) */}
              <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>
                <Image src="/recycle.png" alt="Delete" width={16} height={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <Image src="/clipboard.png" alt="Clipboard Icon" width={56} height={56} />
            <p className="empty-text">You don't have any tasks registered yet.</p>
            <p className="empty-subtext">Create tasks and organize your to-do items.</p>
          </div>
        )}
      </div>
    </main>
  );
}
