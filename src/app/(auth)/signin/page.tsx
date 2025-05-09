import { Square, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="relative flex flex-col justify-center items-center md:max-w-5xl mx-auto min-h-screen w-full px-4 md:px-0 text-sm">
        <Link href="/" className="absolute top-10 right-0 flex justify-center items-center shadow border w-[40px] h-[40px] focus:border focus:border-black cursor-pointer hover:border hover:border-black transition-all ">
        <X strokeWidth={1.5} />
        </Link>
      <form className="flex flex-col gap-y-6 items-center shadow-lg p-5 border">
        <h1 className="text-[30px] leading-normal font-semibold">Sign In</h1>
        <div className="flex flex-col gap-y-4 w-[350px]">
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-4 border outline-none w-full focus:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 border outline-none w-full focus:border-black"
          />
          <div className="flex flex-wrap justify-between w-full items-center">
            <span className="flex items-center gap-1">
              <Square size={18} />
              <p>Show Password</p>
            </span>
            <Link href="#" className="underline">
              Forgot Password
            </Link>
          </div>
        </div>
        <button className="bg-black mt-5 text-white w-full px-[30px] py-[10px] border border-black hover:bg-transparent hover:text-black transition-all">
          Sign In
        </button>
        <h1>Don't have appobook account? Sign Up</h1>
      </form>
    </main>
  );
};

export default page;
