import Image from "@/public/headphone.png";
import Weight from "@/public/weight.png";
import Heart from "@/public/heart.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="p-2 md:pl-12 flex flex-col md:flex-row bg-white rounded-2xl items-center shadow-xl max-w-3xl">
        <div className="rounded-2xl md:rounded-none md:rounded-l-2xl h-[21rem] w-full flex justify-center items-center md:w-[250px] overflow-hidden">
          <img
            className="object-center rounded-2xl md:rounded-none md:rounded-l-2xl object-cover hover:scale-110 transition-all duration-500 ease-in-out"
            src={Image.src}
          />
        </div>
        <div className="p-10 text-black space-y-3 text-center md:text-start">
          <span className="inline-block bg-black text-white rounded-full py-1 px-2 text-xs">Free Shipping</span>
          <h1 className="text-2xl pb-8 font-normal capitalize">razer kraken kitty edt gaming headset quartz</h1>
          <p className="text-xs line-through">$799</p>
          <h1 className="text-4xl font-bold">$599</h1>
          <p className="text-sm font-normal text-gray-500 tracking-tight">
            The offer is valid until April 3 or as long as stock lasts!
          </p>
          <div className="">
            <button className="text-sm w-full px-4 py-3 my-3 bg-[#3b82f6] hover:bg-[#2d62b9] active:bg-[#6699ea] duration-500 text-white rounded-md">
              Add to cart
            </button>
          </div>
          <p className="group text-sm font-normal tracking-tight flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 group-hover:animate-ping"></span> 50+ pcs.
            in stock.
          </p>
          <div className="flex justify-between gap-3">
            <button className="group flex gap-2 justify-center items-center text-sm flex-1 px-4 py-3 my-3 bg-white text-black border-2 border-gray-300 hover:border-black hover:bg-black active:bg-[#6699ea] duration-500 hover:text-white rounded-md hover:-translate-y-1 hover:shadow-lg">
              <img className="w-5 h-5 group-hover:invert" src={Weight.src} />
              Add to cart
            </button>
            <button className="group flex gap-2 justify-center items-center text-sm flex-1 px-4 py-3 my-3 bg-white text-black border-2 border-gray-300 hover:border-black hover:bg-black active:bg-[#6699ea] duration-500 hover:text-white rounded-md hover:-translate-y-1 hover:shadow-lg">
              <img className="w-5 h-5 group-hover:invert" src={Heart.src} />
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
