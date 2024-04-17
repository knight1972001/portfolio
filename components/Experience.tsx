/* eslint-disable @next/next/no-img-element */
"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "@/hoc/page";
import { textVariant } from "@/utils/motion";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ experience }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{ background: "#232D3F", color: "#ffffff" }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        visible={inView}
        date={experience.date}
        icon={
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="h-[60%] w-[60%] object-contain"
            />
          </div>
        }
        iconStyle={{ background: experience.iconBg }}
      >
        <div>
          <h3 className="text-[24px] font-bold text-white">
            {experience.title}
          </h3>
          <p
            className="text-[16px] font-semibold text-[#aaa6c3]"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="ml-5 mt-5 list-disc space-y-2">
          {experience.points.map((point: any, index: any) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1 text-[14px] tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience = ({ data }: any) => {
  const experience = data.data;

  return (
    <div>
      <motion.div variants={textVariant(0.5)}>
        <p className="text-[14px] uppercase tracking-wider text-[#d3d3d3] sm:text-[18px]">
          what I have done so far?
        </p>
        <h2 className="text-[30px] font-black text-[#d3d3d3] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#ffffff">
          {experience.map((experience: any, index: any) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
