import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <Image src="/Logo.png" alt="Todo App Logo" width={226} height={48} />
    </header>
  );
}
