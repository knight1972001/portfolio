/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "@/utils/motion";
import { about } from "@/data/data";
import { SectionWrapper } from "@/hoc/page";
import Link from "next/link";

const AboutCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => {
  return (
    <Tilt
      className="parallax-effect-glare-scale w-full xs:w-[250px]"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      transitionSpeed={1000}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 1)}
        className="green-blue-gradient w-full rounded-[20px] p-[2px] shadow-card "
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#0F0F0F] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="text-[14px] uppercase tracking-wider text-[#d3d3d3] sm:text-[18px]">
          Introduction
        </div>
        <h2 className="text-[28px] font-bold text-white sm:text-[40px]">
          Overview.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="max-w-8xl mt-4 text-[17px] leading-[30px] text-[#d3d3d3]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.div>

      {/* <div className="mb-20 mt-20 flex flex-wrap justify-center gap-10">
        {about.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
