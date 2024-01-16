/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAllFeedback } from "../actions/actionsDB";
import Loading from "./Loading";
import { SectionWrapper } from "@/hoc/page";

const FeedbackCard = ({ index, item }: any) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="dark-gradient-feedback-tag w-full rounded-3xl p-10 xs:w-[320px]"
  >
    <p className="text-[30px] font-black text-white">"</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">
        {item.testimonial}
      </p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {item.name}
          </p>
          <p className="mt-1 text-[12px] text-[#aaa6c3]">
            {item.designation} of {item.company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = ({ data }: any) => {
  const feedbackData = data.data;
  return (
    <div className={`mt-10 rounded-[20px]`}>
      <div
        className={`min-h-[200px] rounded-t-2xl bg-[#232D3F] px-6 py-10 sm:px-16 sm:py-16`}
      >
        <motion.div variants={textVariant()}>
          <p className="text-[14px] uppercase tracking-wider text-[#aaa6c3] sm:text-[18px]">
            What others say
          </p>
          <h2 className="text-[20px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
            Feedback.
          </h2>
        </motion.div>
      </div>
      <div
        className={`dark-gradient-feedback flex flex-wrap gap-7 px-6 pb-14 sm:px-16`}
      >
        {feedbackData.map((item: any, index: any) => (
          <FeedbackCard key={item.name} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
