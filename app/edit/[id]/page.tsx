'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import BackButton from "@/components/backbutton";
import ColorPicker from "@/components/colorpicker";

export default function EditTask() {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:5000/api/tasks")
        .then((res) => {
          const task = res.data.find((task: any) => task.id === parseInt(id));
          if (task) {
            setTitle(task.title);
            setColor(task.color);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching task:", err);
          setIsLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { title, color });
      router.push("/");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (isLoading) {
    return <p className="p-6 text-white">Loading task details...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center bg-[#1A1A1A] text-white p-6">
      <div className="w-full max-w-lg flex flex-col items-center space-y-6 mt-[75px]">
        <BackButton />
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <label className="block text-[14px] font-medium mb-2 text-[#4EA8DE]">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-[#262626] border border-gray-600 rounded-md text-white text-[14px] focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <ColorPicker selectedColor={color} onSelect={setColor} />
          <button
            type="submit"
            className="w-full py-3 bg-[#1E6F9F] text-white text-[14px] font-bold rounded-lg transition-all hover:bg-[#155E75] flex justify-center items-center gap-2"
          >
            Save
            <Image src="/tickarrow.png" alt="Tick Arrow" width={16} height={16} priority />
          </button>
        </form>
      </div>
    </main>
  );
}
