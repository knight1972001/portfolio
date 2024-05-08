/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAllFeedback } from "../actions/actionsDB";
import Loading from "./Loading";
import { SectionWrapper } from "@/hoc/page";
import { useRouter } from "next/navigation";
import { slideIn } from "../utils/motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const IdeaCard = ({ index, item }: any) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    {/* <p className="text-[30px] font-black text-white">"</p> */}

    <div className="dark-gradient-feedback-tag mt-1 w-[320px] transform select-none snap-center rounded-3xl p-10 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 ">
      <p className="text-[18px] font-bold tracking-wider text-white">
        {/* {item.testimonial} */}
        {item.name}
      </p>

      <div className="mt-2 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {item.author}
          </p>
          <p className="mt-4 text-[12px] text-[#aaa6c3]">
            {/* {item.designation} of {item.company} */}
            {item.summary}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Ideas = ({ data }: any) => {
  const router = useRouter();

  const ideasData = data.data;

  const handleClick = (id: any) => {
    console.log("Clicking /idea/" + id);
    router.push(`/idea/${id}`);
  };

  const slideLeft = () => {
    var slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className={`mt-10 rounded-[20px]`}>
      <div
        className={`min-h-[200px] rounded-t-2xl bg-[#232D3F] px-6 py-10 sm:px-16 sm:py-16`}
      >
        <motion.div variants={textVariant()}>
          <p className="text-[14px] uppercase tracking-wider text-[#aaa6c3] sm:text-[18px]">
            My coming
          </p>
          <h2 className="text-[20px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
            ideas...
          </h2>
        </motion.div>
      </div>

      <div
        className={`dark-gradient-feedback flex items-center`}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        <FaChevronLeft
          size={40}
          className="mx-4 mb-[5rem] cursor-pointer text-white opacity-50 hover:opacity-100"
          onClick={slideLeft}
        />
        <div
          id="slider"
          className="transparent scroll scrollbar-hide flex snap-x gap-7 overflow-x-auto scroll-smooth pb-14 pt-5 sm:px-6"
        >
          {ideasData.map((item: any, index: any) => (
            <motion.div
              variants={slideIn("left", "spring", index * 0.5, 1)}
              key={item._id}
            >
              <div
                onClick={() => handleClick(item._id)}
                className="opacity-75 hover:opacity-100"
              >
                <IdeaCard index={index} item={item} />
              </div>
            </motion.div>
          ))}
        </div>
        <FaChevronRight
          size={40}
          className="mx-4 mb-[5rem] cursor-pointer text-white opacity-50 hover:opacity-100"
          onClick={slideRight}
        />
      </div>

      {/* <div className="relative flex items-center">
        <FaChevronLeft
          size={40}
          className="cursor-pointer text-white opacity-50 hover:opacity-100"
          onClick={slideLeft}
        />
        <div
          id="slider"
          className="scroll scrollbar-hide h-full w-full snap-x overflow-x-auto scroll-smooth whitespace-nowrap"
        >
          {ideasData.map((item: any, index: any) => (
            <motion.div
              variants={slideIn("left", "spring", index * 0.5, 1)}
              key={item._id}
            >
              <div onClick={() => handleClick(item._id)} className="w-[220px]">
                <IdeaCard index={index} item={item} />
              </div>
            </motion.div>
          ))}
        </div>
        <FaChevronRight
          size={40}
          className="cursor-pointer text-white opacity-50 hover:opacity-100"
          onClick={slideRight}
        />
      </div> */}
    </div>
  );
};

export default SectionWrapper(Ideas, "");
