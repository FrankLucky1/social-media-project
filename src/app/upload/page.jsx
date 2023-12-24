"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  hero,
  lady,
  group,
  group2,
  carpenter,
  customerCare,
  obama,
  blackman,
  woman,
} from "@/images";
import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [data, setData] = useState();
  const [oneData, setOneData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // const handleClick = (e)=>{
  //   console.log(e.target.checked);
  // }
  const checkfile = () => {
    const res = data.map();
  };

  useEffect(() => {
    // console.log("hi");
    const getContent = async () => {
      try {
        // console.log("hello");
        setLoading(true);
        const response = await axios.get(`${url}/posts`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        setData(response?.data?.data);
        console.log(data?.length);
        if (response?.data?.status === 200) {
          toast("Welcome to Sunset Sizzle ", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        }
        // return response
      } catch (error) {
        if (error) {
          toast("Unable to get data, try again", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        }
      } finally {
        setLoading(false);
        
        console.log(data);
      }
    };
    getContent();
  }, []);

  const handleClick = (e) => {
    console.log(e.target.id);
    setIsOpen(true);
    const id = e.target.id;

    const oneImage = data.filter((item) => item._id === id);
    console.log(oneImage[0]);
    setOneData(oneImage);
  };
  return (
    <div className="w-full h-screen relative text-white bg-slate-950 flex flex-col items-center xl:pt-6 pb-1 px-2 justify-start">
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute w-full bg-black/90 flex text-center items-center justify-center h-full  z-[10000]"
        >
          {oneData.map((item) => (
            <div className="p-3 flex flex-col items-center justify-center w-auto">
              <Image
                src={item?.photo}
                id={item?._id}
                width={350}
                height={350}
                alt="picture1"
                className="min-w-auto h-full"
              />
              <div className="rounded-b-xl flex flex-col items-start justify-start bg-gray-700/80 h-auto w-full px-2 xl:px-5 xl:py-4 py-3 gap-1 xl:gap-2">
                <span className="flex max-md:text-xs items-start justify-start gap-2">
                  <p className="capitalize xl:text-xl">
                    Posted by: {item?.name}
                  </p>
                </span>
                <p className="max-md:text-[10px] ">{item?.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center w-full max-sm:py-4 py-2 xl:px-10 px-2 gap-3">
        <Link href={"/"}>Sunset Sizzle</Link>
        <div className="flex justify-center items-center gap-4">
          <div className="flex gap-1">
            <MdOutlineLightMode className="text-2xl" />
            <label className="switch">
              <input type="checkbox" onChange={handleClick} />
              <span className="slider round"></span>
            </label>
            <MdDarkMode className="text-2xl" />
          </div>
          <Image
            src={"/social.png"}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      {/* <div className="mb-5 w-full flex justify-center">
          <input
            type="text"
            placeholder="search for uploads using name of staff"
            className="bg-transparent w-full px-2 py-1 border placeholder:text-center focus:border-gray-400 outline-none rounded-xl border-gray-400 xl:w-[25rem]"
          />
        </div> */}

      {/* content */}
      <div className="w-full overflow-y-auto bg-slate-900 rounded-2xl py-3 px-2 flex flex-col justify-center items-start gap-3">
        <h1>22, December 2023</h1>
        <div className="overflow-y-auto w-full no-scrollbar columns-3 max-md:columns-1 space-y-4">
          {!data && !loading && (
            <p className="lg:text-xl">No data available</p>
          )}
          {loading ? (
            <div>Loading...</div>
          ) : (
            data?.map((item) => (
              <div
                key={item?._id}
                id={item?._id}
                className="w-auto group h-auto rounded-xl relative "
              >
                {item?.photo.length > 0 ? (
                  <Image
                    src={item?.photo}
                    id={item?._id}
                    onClick={(e) => handleClick(e)}
                    width={500}
                    height={500}
                    alt="picture1"
                    className="rounded-xl max-sm:rounded-xl"
                  />
                ) : (
                  <div className="h-auto w-full relative">
                    <video loop controls id="bg-video" className="rounded-t-xl w-full">
                      <source src={item?.video} type="video/mp4" />
                    </video>
                    <div className="rounded-b-xl xl:rounded-b-xl group-hover:flex max-lg:justify-center max-lg:hover:flex flex-col bottom-0 bg-gray-500/90 max-md:h-auto gap-2 w-full px-2 xl:px-5 xl:py-4 py-3">
                      <span className="flex max-md:text-xs items-center justify-start gap-2">
                        <p className="xl:h-7 xl:w-7 bg-slate-700 flex items-center justify-center capitalize text-white text-[9px] h-4 w-4 font-semibold rounded-full">
                          {item.name[0]}
                        </p>
                        <p className="capitalize xl:text-xl text-lg font-semibold">{item?.name}</p>
                      </span>
                      <p className="max-md:text-[12px]">{item?.comment}</p>
                    </div>
                  </div>
                )}
                {item?.photo && (
                  <div className="absolute rounded-b-xl xl:rounded-b-xl xl:group-hover:flex max-md:flex hidden max-lg:hover:flex flex-col bottom-0 bg-gray-500/80 h-auto w-full px-2 xl:px-5 xl:py-4 py-2">
                    <span className="flex max-md:text-xs items-center justify-start gap-2">
                      <p className="xl:h-7 xl:w-7 bg-slate-700 flex items-center justify-center capitalize text-white text-[9px] h-5 w-5 font-semibold rounded-full">
                        {item.name[0]}
                      </p>
                      <p className="capitalize font-semibold xl:text-xl text-lg">{item?.name}</p>
                    </span>
                    <p className="max-md:text-[12px]">{item?.comment}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
