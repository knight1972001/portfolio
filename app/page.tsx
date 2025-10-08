"use client";
import {
  getAllExperience,
  getAllFeedback,
  getAllIdeas,
  getAllProject,
  getAllTech,
} from "@/actions/actionsDB";
import Loading from "@/components/Loading";
import SocialMedia from "@/components/SocialMedia";
import {
  About,
  Contact,
  Experience,
  Ideas,
  Hero,
  Navbar,
  Project,
  StarsCanvas,
  Tech,
} from "@/components/page";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [experienceData, setExperience] = useState<any>();
  const [techData, setTech] = useState<any>();
  const [projectData, setProject] = useState<any>();
  const [ideaData, setIdea] = useState<any>();
  const [isLoadExp, setLoadExp] = useState(true);
  const [isLoadTech, setLoadTech] = useState(true);
  const [isLoadProject, setLoadProject] = useState(true);
  const [isLoadIdea, setLoadIdea] = useState(true);

  // Animation support
  const [opacity, setOpacity] = useState<number>(1);
  const [display, setDisplay] = useState<any>("flex");
  const [isShowContent, setIsShowContent] = useState(false);
  const [opacityContent, setOpacityContent] = useState<number>(0);

  const fetchExperience = async () => {
    try {
      // Simulate an asynchronous data fetch
      const res = await getAllExperience();
      // Update the state with the found conversation
      if (res != undefined) {
        setExperience(res);
        setLoadExp(false);
      }
      // Update the state with the fetched conversation
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadExp(false);
    }
  };

  const fetchTech = async () => {
    try {
      console.log("Fetching Tech");
      // Simulate an asynchronous data fetch
      const res = await getAllTech();
      // console.log(foundConversation)
      // Update the state with the found conversation
      if (res != undefined) {
        setTech(res);
        setLoadTech(false);
      }
      // Update the state with the fetched conversation
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadTech(false);
    }
  };

  const fetchProject = async () => {
    try {
      console.log("Fetching Project");
      // Simulate an asynchronous data fetch
      const res = await getAllProject();
      // console.log(foundConversation)
      // Update the state with the found conversation
      if (res != undefined) {
        setProject(res);
        setLoadProject(false);
      }
      // Update the state with the fetched conversation
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadProject(false);
    }
  };

  const fetchIdea = async () => {
    try {
      console.log("Fetching Ideas");
      // Simulate an asynchronous data fetch
      const res = await getAllIdeas();
      // console.log(foundConversation)
      // Update the state with the found conversation
      if (res != undefined) {
        setIdea(res);
        setLoadIdea(false);
      }
      // Update the state with the fetched conversation
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadIdea(false);
    }
  };

  useEffect(() => {
    fetchExperience();
    fetchTech();
    fetchProject();
    fetchIdea();
  }, []);

  if (isLoadExp || isLoadTech || isLoadProject || isLoadIdea) {
    return <Loading />;
  }

  return (
    <div>
      <div className="background relative z-0">
        <div className="background bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience data={experienceData} />
        <Tech data={techData} />
        <Project data={projectData} />
        <Ideas data={ideaData} />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default HomePage;
