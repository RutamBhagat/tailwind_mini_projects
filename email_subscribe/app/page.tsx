import Image from "@/public/image.jpg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-[#3f3f46]">
      <div className="p-2 flex flex-col md:flex-row bg-[#27272a] rounded-2xl items-center shadow-lg max-w-3xl">
        <div className="rounded-2xl md:rounded-none md:rounded-l-2xl h-[21rem] w-full flex justify-center items-center md:w-[250px] overflow-hidden">
          <img
            className="object-center rounded-2xl md:rounded-none md:rounded-l-2xl object-cover hover:scale-110 transition-all duration-500 ease-in-out"
            src={Image.src}
          />
        </div>
        <div className="p-10 text-white space-y-6 text-center md:text-start">
          <h1 className="font-serif text-2xl font-semibold">Get diet and fitness tips in your inbox</h1>
          <p className="text-sm font-normal">
            Eat better and exercise better. Sign up for the Diet and Fitness newsletter.
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="text-sm text-center md:text-start px-4 py-3 flex-1 bg-[#27272a] border border-[#535359] rounded-md"
              placeholder="Enter your email address"
            />
            <button className="text-sm px-4 py-3 bg-[#84cc16] hover:bg-[#649b11] active:bg-[#b3ef5a] duration-500 text-[#27272a] rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
