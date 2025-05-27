"use client";
import Image from "next/image";
import Link from "next/link";
import ImageBG from "@/app/images/image.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="h-[10vh] w-full bg-white shadow-md flex items-center justify-between px-6 lg:px-20">
        <h1 className="text-xl font-bold text-gray-800">
          Sultan<storng className="text-orange-400">Tracker</storng>
        </h1>
        <Link
          href="/technician"
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Open
        </Link>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 items-center justify-center px-6 lg:px-20 py-10">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight uppercase">
            Welcome to <br />
            <span className="text-orange-400">Sultan Tracker</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Manage technicians and monitor installations across all districts.
          </p>
          <Link
            href="/technician"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={ImageBG}
            alt="Home illustration"
            className="w-full max-w-lg h-auto"
            priority
          />
        </div>
      </main>
    </div>
  );
}
