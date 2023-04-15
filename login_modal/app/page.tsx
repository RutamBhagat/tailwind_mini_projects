import Image from "@/public/image.jpg";
import Google from "@/public/google.png";
import Facebook from "@/public/facebook.png";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
      <div className="relative flex flex-col md:flex-row bg-white rounded-2xl items-center shadow-xl max-w-5xl">
        <div className="p-10  text-black space-y-3 text-center md:text-start">
          <h1 className="font-serif text-2xl pb-4 font-bold capitalize">Log in</h1>
          <p className="pb-6 text-sm font-normal text-gray-500 tracking-tight">
            Log in to your account to upload or download pictures, videos or music.
          </p>
          <input
            placeholder="Enter your email address"
            className="text-sm w-full px-4 py-3 my-3 rounded-md border border-gray-300"
          />
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <Link href="/" className="group sm:text-start flex gap-2 text-sm flex-1 px-4 py-3 my-3 text-[#0e7490]">
              Forgot password?
            </Link>
            <button className="group flex gap-2 justify-center items-center rounded-md text-base px-6 py-2 my-3 bg-[#0e7490] text-white">
              Next
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M13.3 17.275q-.3-.3-.288-.725t.313-.725L16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.3-.713t.3-.712q.3-.3.713-.3t.712.3L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.275t-.713-.3Z"
                />
              </svg>
            </button>
          </div>
          <p className="text-center pt-5 text-sm font-normal text-gray-500 tracking-tight border-t border-gray-300">
            Or log in with
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <button className="group flex gap-2 justify-center items-center text-sm flex-1 px-4 py-3 my-3 bg-white text-black border-2 border-gray-300 hover:bg-gray-100 duration-500 rounded-md hover:-translate-y-1 hover:shadow-lg">
              <img className="w-5 h-5" src={Google.src} />
              Google
            </button>
            <button className="group flex gap-2 justify-center items-center text-sm flex-1 px-4 py-3 my-3 bg-white text-black border-2 border-gray-300 hover:bg-gray-100 duration-500 rounded-md hover:-translate-y-1 hover:shadow-lg">
              <img className="w-5 h-5" src={Facebook.src} />
              Facebook
            </button>
          </div>
        </div>
        <div className="hidden md:block rounded-2xl md:rounded-none md:rounded-r-2xl h-[550px] min-w-[200px] w-2/3 overflow-hidden">
          <div
            style={{
              backgroundImage: `url(${Image.src})`,
            }}
            className="bg-cover bg-center hover:scale-110 w-full h-full duration-500"
          ></div>
        </div>
        <button className="absolute top-5 right-5 w-6 h-6 rounded-full bg-white border border-gray-300 md:border-none">
          <svg className="text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
