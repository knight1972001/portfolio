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
    <div>
      <motion.div variants={textVariant(0.75)}>
        <p className=" text-[14px] uppercase tracking-wider text-[#d3d3d3] sm:text-[18px]">
          Introduction
        </p>
        <h2 className="text-[30px] font-black text-[#d3d3d3] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-4 w-full text-[17px] leading-[30px] text-[#aaa6c3]"
      >
        I'm a skilled software developer with experience in OOP languages like
        C++, Java, and expertise in frameworks like NextJS, AngularJS, NodeJS,
        etc. With 8 months of full-time co-op experience at the Ministry of
        Children Community and Social Services Ontario, I have honed my
        technical skills and developed excellent communication and teamwork
        abilities. Additionally, I have completed the Google IT Automation
        Certificate and graduated with an Advanced Diploma in Computer
        Programming & Analysis from Seneca College. I am a quick learner who is
        passionate about using cutting-edge technologies and integrating complex
        AI models. Let's collaborate to create innovative and ethical solutions
        that make a positive impact on the world.
      </motion.p>

      <div className="mb-20 mt-20 flex flex-wrap justify-center gap-10">
        {about.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
