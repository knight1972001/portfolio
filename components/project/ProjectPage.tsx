"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { getProjectById } from "@/actions/actionsDB";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProjectPage = ({ id }: any) => {
  const [projectData, setProject] = useState<any>();
  const [isLoadProject, setLoadProject] = useState(true);

  const router = useRouter();

  console.log("Going to ProjectPage");

  const fetchProject = async (id: any) => {
    try {
      console.log("Fetching Project");
      // Simulate an asynchronous data fetch
      const res = await getProjectById(id);
      console.log(res);
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

  useEffect(() => {
    fetchProject(id);
  }, []);

  if (isLoadProject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-w-screen bg-blue relative min-h-screen text-3xl sm:bg-black">
      <div className="inner-element card-img_hover absolute inset-0 m-3 flex justify-end">
        <div
          onClick={() => router.push("https://longnguyen-vhoang.vercel.app/")}
          className="black-gradient flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full"
        >
          <img
            src={`../back.png`}
            alt="source code"
            className="h-1/2 w-1/2 object-contain"
          />
        </div>
      </div>
      <div className="p-12">
        <p>ID from Component: {projectData.name}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
