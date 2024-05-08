/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { convertBadgeUrl } from "@/utils/utils";

const ProjectCard = ({ key, object, index }: any) => {
  const router = useRouter();

  const handleClick = (id: any) => {
    console.log("Clicking /project/" + id);
    router.push(`/project/${id}`);
  };

  return (
    <div className="text-white">
      <Tilt
        transitionSpeed={1000}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="parallax-effect-glare-scale h-[560px] w-full rounded-2xl bg-[#1A1A1A] p-5 sm:w-[360px]"
        glareEnable={true}
        glareMaxOpacity={0.4}
        scale={1.06}
      >
        <div
          className="inner-element relative h-[230px] w-full"
          onClick={() => handleClick(object._id)}
        >
          <img
            src={`/projects/${object.image}`}
            alt={object.name}
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="inner-element card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(object.source_code_link, "_blank")}
              className="black-gradient flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={`./github.png`}
                alt="source code"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className="inner-element mt-5"
          onClick={() => {
            handleClick(object._id);
          }}
        >
          <h3 className="text-[24px] font-bold text-white">{object.name}</h3>
          <h4 className="text-[15px] text-[#BED754]">{object.tech}</h4>
          {/* {object.description.map((item: string, index: number) => (
            <p className="mt-2 text-[14px] text-[#aaa6c3]" key={index}>
              {item}
            </p>
          ))} */}
          <p className="mt-2 text-[14px] text-[#aaa6c3]" key={index}>
            {object.description[0]}
          </p>
        </div>

        <div className="inner-element absolute bottom-0 mb-6 flex flex-wrap gap-2">
          {object.tags.map((tag: any, index: number) => (
            <img
              src={convertBadgeUrl(tag.name, tag.color)}
              key={`${index}-${tag.name}`}
              className="opacity-75 transition-all duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Project = ({ data }: any) => {
  // console.log(data);
  const projectData = data.data;

  return (
    <>
      <div className="mt-20">
        <p className=" text-[14px] uppercase tracking-wider text-[#aaa6c3] sm:text-[18px]">
          What I did?
        </p>
        <h2 className="text-[20px] font-black text-[#d3d3d3] xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Projects
        </h2>
      </div>

      <div className="flex w-full">
        <p className="mt-3 max-w-3xl text-[17px] leading-[30px] text-[#aaa6c3]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
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
