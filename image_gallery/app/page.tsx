import Image1 from "@/public/image1.jpg";
import Image2 from "@/public/image2.jpg";
import Image3 from "@/public/image3.jpg";
import Image4 from "@/public/image4.jpg";
import Image5 from "@/public/image5.jpg";
import Image6 from "@/public/image6.jpg";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-12 md:px-24 bg-gray-100">
      <div className="container min-h-screen max-w-5xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-end items-center gap-8 capitalize py-10 md:py-20 px-3">
          <Link className="hover:border-b-2 border-gray-800 h-6" href="/">
            Vector
          </Link>
          <Link className="hover:border-b-2 border-gray-800 h-6" href="/">
            Illustrations
          </Link>
          <Link className="hover:border-b-2 border-gray-800 h-6" href="/">
            Images
          </Link>
          <Link className="hover:border-b-2 border-gray-800 h-6" href="/">
            Icons
          </Link>
        </ul>
        <div className="flex flex-col md:flex-row gap-5 justify-between p-3">
          <div className="relative w-full md:w-1/2">
            <input
              placeholder="Search"
              className="appearance-none py-3 px-3 w-full bg-gray-100 border border-gray-100 border-b-gray-400"
            ></input>
            <svg
              className="w-8 h-8 absolute top-2.5 right-1 text-gray-300 hover:scale-110 duration-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
              />
            </svg>
          </div>
          <button className="bg-black text-white text-center hover:bg-white hover:text-black hover:border hover:border-black py-3 rounded-md w-full md:w-1/3 duration-500">
            Upload
          </button>
        </div>
        <div className="flex flex-wrap justify-center py-12">
          {images.map((image) => {
            return (
              <div className="group relative w-full md:w-1/2 2xl:w-1/3 p-3">
                <img className="object-cover bg-center" src={image.src} />
                <div className="absolute justify-between items-center bottom-3 left-3 right-3 text-white bg-black bg-opacity-50 hidden group-hover:flex">
                  <div className="flex flex-col justify-center items-center py-3 px-5">
                    <h2 className="text-sm">Abstract Painting</h2>
                    <p className="text-xs">245 likes . 35 shares</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark w-8 h-8 mr-3"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
