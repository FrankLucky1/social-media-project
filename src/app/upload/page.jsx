"use client"
import Image from "next/image";
import React from "react";
import hero from "@/images/hero.jpg";
import carpenter from "@/images/carpenter.jpg"
import woman from "@/images/woman.jpg"
import obama from "@/images/obama.jpeg"
import group from "@/images/group.jpeg"
import group2 from "@/images/group2.jpeg"
import blackman from "@/images/blackman.jpeg"
import customerCare from "@/images/customerCare.jpg"
import lady from "@/images/lady.png"
import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const page = () => {
  const images = [];
  const handleClick = (e)=>{
    console.log(e.target.checked);
  }
  return (
    <div className="w-full h-screen text-white bg-slate-950 flex flex-col items-center xl:pt-6 px-4 justify-start">
      <div className="flex justify-between items-center w-full max-sm:py-4 py-2 xl:px-10 gap-3">
        <Link href={"/"}>Wunmi debbiz</Link>
        <div className="flex justify-center items-center">
          <div className="flex gap-1">
          <MdOutlineLightMode className="text-2xl" />
            <label className="switch">
              <input type="checkbox" onChange={handleClick} />
              <span class="slider round"></span>
            </label>
            <MdDarkMode className="text-2xl" />
          </div>
          <Image
            src={"/social.png"}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
      </div>
       <div className="mb-5 w-full flex justify-center">
          <input
            type="text"
            placeholder="search for uploads using name of staff"
            className="bg-transparent w-full px-2 py-1 border placeholder:text-center focus:border-gray-400 outline-none rounded-xl border-gray-400 xl:w-[25rem]"
          />
        </div>

      {/* content */}
      <div className="w-full overflow-y-auto bg-slate-900 rounded-2xl pt-10 px-4 flex flex-col justify-center items-start gap-3">
        <h1>22, December 2023</h1>
        <div className="overflow-y-auto no-scrollbar columns-3 space-y-4">
          <Image
            src={carpenter}
            alt="picture1"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={obama}
            alt="picture2"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={lady}
            alt="picture3"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={group}
            alt="picture4"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={blackman}
            className="rounded-[30px] object-contain max-sm:rounded-xl"
          />
          <Image
            src={group}
            alt="picture4"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={group2}
            className="rounded-[30px] object-cover max-sm:rounded-xl"
          />
          <Image
            src={obama}
            alt="picture2"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={woman}
            alt="picture3"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={blackman}
            alt="picture4"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={hero}
            className="rounded-[30px] object-contain max-sm:rounded-xl"
          />
          <Image
            src={customerCare}
            alt="picture4"
            className="rounded-[30px] max-sm:rounded-xl"
          />
          <Image
            src={carpenter}
            className="rounded-[30px] object-contain max-sm:rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
