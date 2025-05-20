"use client";
import ImageBG from "@/app/images/image.svg";
import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="h-[100vh] w-ful grid items-start">
      <div className="h-[10vh] w-full bg-white shadow-lg">
        <div className="h-full w-[100%] lg:w-[30%] lg:ml-20  flex items-center ml-4 text-black font-semibold">
          <Link
            className="text-black border-1 border-amber-300 px-2 rounded-b-md"
            href={"/technician"}
          >
            Open
          </Link>
        </div>
      </div>
      <div className="h-[90vh] ">
        <div className="h-[85vh] w-[90%] grid md:grid-cols-2">
          <div className="text-black p-4 h-auto w-full flex items-center justify-center">
            <div className="mb-4 text-2xl font-medium lg:text-5xl lg:leading-normal uppercase flex flex-col justify-center items-center leading-normal">
              <p>Welcome</p>
              <p>to</p>
              <p>sultan tracker</p>
            </div>
          </div>
          <Image src={ImageBG} alt="home image" className="w-screen h-full" />
        </div>
      </div>
    </div>
  );
}
