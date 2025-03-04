'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import BackButton from "@/components/backbutton";
import ColorPicker from "@/components/colorpicker";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const taskData = { title, color: color || "white", completed: false };

    try {
      await axios.post("http://localhost:5000/api/tasks", taskData, {
        headers: { "Content-Type": "application/json" },
      });
      router.push("/");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center bg-[#1A1A1A] text-white p-6">
      <div className="w-full max-w-lg flex flex-col items-center space-y-6 mt-[75px]">
        <BackButton />
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <label className="block font-medium mb-2 text-[14px] text-[#4EA8DE]">Title</label>
            <input
              type="text"
              placeholder="Ex. Brush your teeth"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-[#262626] border border-gray-600 rounded-md text-white text-[14px] focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <ColorPicker selectedColor={color} onSelect={setColor} />
          <button
            type="submit"
            className="w-full py-3 bg-[#1E6F9F] text-white font-bold text-[14px] rounded-lg transition-all hover:bg-[#155E75] flex justify-center items-center gap-2"
          >
            Add Task
            <Image src="/plus.png" alt="Plus Icon" width={16} height={16} priority />
          </button>
        </form>
      </div>
    </main>
  );
}
