/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getAllTech } from "@/actions/actionsDB";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { SectionWrapper } from "@/hoc/page";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";
import { useProgress } from "@react-three/drei";
import BallCanvas from "./canvas/BallTech";

const Tech = ({ data }: any) => {
  const techData = data.data;

  return (
    <>
      <div className="mt-20">
        <p className=" text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          What I am using?
        </p>
        <h2 className="text-[30px] font-black text-[#d3d3d3] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Technologies
        </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        <BallCanvas data={techData} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
