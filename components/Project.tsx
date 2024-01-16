/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc/page";
import { useEffect, useState } from "react";
import { getAllProject } from "../actions/actionsDB";
import Loading from "./Loading";

const ProjectCard = ({ key, object, index }: any) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="text-white"
    >
      <Tilt
        transitionSpeed={1000}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="parallax-effect-glare-scale h-[560px] w-full rounded-2xl bg-[#1A1A1A] p-5 sm:w-[360px]"
        glareEnable={true}
        glareMaxOpacity={0.4}
        scale={1.06}
      >
        <div className="inner-element relative h-[230px] w-full">
          <img
            src={`/projects/${object.image}`}
            alt={object.name}
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="inner-element card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(object.source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={`./github.png`}
                alt="source code"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="inner-element mt-5">
          <h3 className="text-[24px] font-bold text-white">{object.name}</h3>
          {object.description.map((item: string, index: number) => (
            <p className="mt-2 text-[14px] text-[#aaa6c3]" key={index}>
              {item}
            </p>
          ))}
        </div>

        <div className="inner-element absolute bottom-0 mb-6 flex flex-wrap gap-2">
          {object.tags.map((tag: any, index: number) => (
            <p
              key={`${index}-${tag.name}`}
              className={`text-[14px]`}
              style={{ color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Project = ({ data }: any) => {
  // console.log(data);
  const projectData = data.data;

  return (
    <>
      <motion.div variants={textVariant(0.5)} className="mt-20">
        <p className=" text-[14px] uppercase tracking-wider text-[#aaa6c3] sm:text-[18px]">
          What I did?
        </p>
        <h2 className="text-[20px] font-black text-[#d3d3d3] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Projects
        </h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.5)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-[#aaa6c3]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projectData.map((item: any, index: number) => (
          <ProjectCard key={`project-${index}`} index={index} object={item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");
