import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-[#1e293b] text-white">
      <Card />
    </main>
  );
}
