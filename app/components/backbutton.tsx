'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")} className="self-start mb-4">
      <Image src="/backarrow.png" alt="Back" width={14} height={14} />
    </button>
  );
}
