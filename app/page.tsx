"use client";
import {
  getAllExperience,
  getAllFeedback,
  getAllProject,
  getAllTech,
} from "@/actions/actionsDB";
import Loading from "@/components/Loading";
import SocialMedia from "@/components/SocialMedia";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Project,
  StarsCanvas,
  Tech,
} from "@/components/page";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [experienceData, setExperience] = useState<any>();
  const [techData, setTech] = useState<any>();
  const [projectData, setProject] = useState<any>();
  const [feedbackData, setFeedback] = useState<any>();
  const [isLoadExp, setLoadExp] = useState(true);
  const [isLoadTech, setLoadTech] = useState(true);
  const [isLoadProject, setLoadProject] = useState(true);
  const [isLoadFeedback, setLoadFeedback] = useState(true);

  const fetchExperience = async () => {
    try {
      console.log("Fetching Experience");
      // Simulate an asynchronous data fetch
      const res = await getAllExperience();
      // console.log(foundConversation)
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

  const fetchFeedback = async () => {
    try {
      console.log("Fetching Feedback");
      // Simulate an asynchronous data fetch
      const res = await getAllFeedback();
      // console.log(foundConversation)
      // Update the state with the found conversation
      if (res != undefined) {
        setFeedback(res);
        setLoadFeedback(false);
      }
      // Update the state with the fetched conversation
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadFeedback(false);
    }
  };

  useEffect(() => {
    fetchExperience();
    fetchTech();
    fetchProject();
    fetchFeedback();
  }, []);

  if (isLoadExp || isLoadTech || isLoadProject || isLoadFeedback) {
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
        <Feedbacks data={feedbackData} />
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
