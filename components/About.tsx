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
        I am a versatile Software Engineer with a proven track record in
        designing and implementing scalable systems, passionate about bridging
        robust backend architectures with intuitive frontend experiences.
        Proficient in Python, JavaScript/TypeScript, and cloud technologies
        (AWS, Docker, Kubernetes), I optimized high-traffic applications like
        Intuit’s ProTax backend using Elastic Load Balancer and Auto Scaling,
        ensuring reliability for 100K+ users. I excel in AI/ML integration,
        having built a secure, locally-hosted AI chat app and a crypto trading
        model with 20% ROI. A proactive problem-solver, I combine my Bachelor’s
        in Software Development with hands-on experience in REST APIs, databases
        (PostgreSQL, MongoDB), and modern frameworks (React, Spring Boot) to
        deliver performant, user-centric solutions. Currently pursuing AWS
        certification, I thrive in collaborative, agile environments and am
        eager to tackle complex system design challenges.
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
