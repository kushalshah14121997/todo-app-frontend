"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="border p-4 flex justify-between">
          <p>{task.title}</p>
          <button onClick={() => axios.delete(`http://localhost:5000/api/tasks/${task.id}`)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
