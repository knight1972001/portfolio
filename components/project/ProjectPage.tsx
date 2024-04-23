"use client";

import { getProjectById } from "@/actions/actionsDB";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectPage = ({
  id,
  standalone = true,
}: {
  id: any;
  standalone: boolean;
}) => {
  const [projectData, setProject] = useState<any>();
  const [projectDataDetail, setProjectDataDetail] = useState<any>("");
  const [isLoadProject, setLoadProject] = useState(true);
  const [opacity, setOpacity] = useState<number>(1);
  const [display, setDisplay] = useState<any>("flex");
  const [isShowContent, setIsShowContent] = useState(false);
  const [opacityContent, setOpacityContent] = useState<number>(0);

  const router = useRouter();

  console.log("Going to ProjectPage");

  function updateImageLinks(
    markdownText: string,
    githubSource: string,
  ): string {
    const imageRegex = /!\[([^[\]]*)]\(([^()]*)\)/g;
    const matches = Array.from(markdownText.matchAll(imageRegex));
    let updatedMarkdown = markdownText;

    if (githubSource.includes("main")) {
      const link = githubSource.replace("tree", "raw");
      for (const match of matches) {
        const originalLink = match[2];
        const fullLink = originalLink.startsWith("http")
          ? originalLink
          : `${link}/${originalLink}`;
        updatedMarkdown = updatedMarkdown.replace(originalLink, fullLink);
      }
    } else {
      for (const match of matches) {
        const originalLink = match[2];
        const fullLink = originalLink.startsWith("http")
          ? originalLink
          : `${githubSource}/raw/master/${originalLink}`;
        updatedMarkdown = updatedMarkdown.replace(originalLink, fullLink);
      }
    }

    return updatedMarkdown;
  }

  const fetchProject = async (id: any) => {
    try {
      console.log("Fetching Project");
      // test loading page
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate an asynchronous data fetch
      const res = await getProjectById(id);
      console.log(res);
      // Update the state with the found conversation
      if (res != undefined) {
        setProject(res);
        setLoadProject(false);
        setProjectDataDetail(
          updateImageLinks(res.detail, res.source_code_link),
        );
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

  // Hiding loading
  useEffect(() => {
    if (!isLoadProject) {
      let value = 1;
      setOpacity(1);
      // Calculate the amount to decrease per millisecond
      const decreasePerMs = 1 / (0.2 * 1000); // 0.3 seconds

      // Start decreasing the value gradually
      const intervalId = setInterval(() => {
        // Decrease the value by the calculated amount
        value -= decreasePerMs;
        setOpacity(value);

        // Clamp the value to prevent it from going below 0
        if (value < 0) {
          value = 0;
        }

        console.log(value); // Output the current value

        // Check if the value has reached 0
        if (value === 0) {
          setOpacity(0);
          clearInterval(intervalId); // Stop the interval
          setDisplay("none");
          setIsShowContent(true);
        }
      }, 1);
    }
  }, [isLoadProject]);

  // Show content
  useEffect(() => {
    if (isShowContent) {
      let value = 1;
      setOpacityContent(0);
      // Calculate the amount to decrease per millisecond
      const decreasePerMs = 1 / (0.2 * 1000); // 0.2 seconds

      // Start decreasing the value gradually
      const intervalId = setInterval(() => {
        // Decrease the value by the calculated amount
        value -= decreasePerMs;
        setOpacityContent(1 - value);

        // Clamp the value to prevent it from going below 0
        if (value < 0) {
          value = 0;
        }

        console.log(value); // Output the current value

        // Check if the value has reached 0
        if (value === 0) {
          setOpacityContent(1);
          clearInterval(intervalId); // Stop the interval
        }
      }, 1);
    }
  }, [isShowContent]);

  return (
    <div className="min-w-screen relative min-h-screen bg-black">
      <div
        className="absolute inset-0 flex items-center justify-center bg-black"
        style={{ opacity: opacity, display: display }}
      >
        <img
          src={`/loading/loadingmini.gif`}
          alt="source code"
          className="object-contain"
        />
      </div>

      {isShowContent && (
        <div
          className="min-w-screen standalone relative min-h-screen text-3xl"
          style={{ opacity: opacityContent }}
        >
          {standalone && (
            <div className="inner-element card-img_hover absolute inset-0 m-3 flex justify-end">
              {/* <div
                onClick={() =>
                  router.push("https://longnguyen-vhoang.vercel.app/")
                }
                className="black-gradient flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={`../back.png`}
                  alt="source code"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div> */}

              <Link href={"/"} prefetch={true}>
                <div className="black-gradient flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full">
                  <img
                    src={`../back.png`}
                    alt="source code"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </Link>
            </div>
          )}

          <div className="flex flex-col items-center justify-center space-y-3">
            {/* <Skeleton className="h-[350px]" /> */}

            {/* Using Image component */}
            <div
              className="image-container relative overflow-hidden bg-black/10 backdrop:backdrop-blur-sm"
              onClick={() => {
                window.location.reload();
              }}
            >
              <Image
                src={`/projects/${projectData.image}`}
                alt="source code"
                layout="fill"
                objectFit="contain"
              />
              <div className="inner-element card-img_hover absolute inset-0 m-3 flex flex-wrap items-end justify-start gap-2">
                {projectData.tags.map((tag: any, index: number) => (
                  <p
                    key={`${index}-${tag.name}`}
                    className={`text-[12px]`}
                    style={{ color: tag.color }}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
            {/* Using Image component */}

            <div className="mx-9 my-40 space-y-2 sm:mx-[25vw]">
              <h1 className="whitespace-normal text-left font-bold text-white">
                {projectData.name}
              </h1>

              <div className="bg-black/30 px-4 py-4 font-serif text-base font-light italic text-[#9babf0] backdrop:backdrop-blur-sm">
                <h3>Summary: {projectData.description[0]}</h3>
              </div>

              {/* Render Markdown */}
              <div className="wrap justify-center py-10 text-[0.8rem] text-white sm:text-[1rem]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {projectDataDetail}
                  {/* {STORE_MARKDOWN} */}
                </ReactMarkdown>
              </div>
              {/* Using Render Markdown */}

              <Link href={projectData.source_code_link} prefetch={true}>
                <div className="text-[20px] text-white underline">
                  <h4>
                    {" "}
                    <img
                      src={`../github.png`}
                      alt="source code"
                      className="h-[20px] w-[20px] object-contain"
                    />
                    Link Source{" "}
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// red sm:blue. -> red if small. for phone. bigger sm, will be show in : PC

export default ProjectPage;
