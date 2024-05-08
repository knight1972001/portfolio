"use client";

import { getIdeaById } from "@/actions/actionsDB";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ContactForm from "./ContactForm";
import { convertBadgeUrl, countWords } from "@/utils/utils";
import { RiArrowGoBackFill } from "react-icons/ri";

const IdeaPage = ({
  id,
  standalone = true,
}: {
  id: any;
  standalone: boolean;
}) => {
  const [ideaData, setIdea] = useState<any>();
  const [IdeaDataDetail, setIdeaDataDetail] = useState<any>("");
  const [isLoadProject, setLoadProject] = useState(true);
  const [opacity, setOpacity] = useState<number>(1);
  const [display, setDisplay] = useState<any>("flex");
  const [isShowContent, setIsShowContent] = useState(false);
  const [opacityContent, setOpacityContent] = useState<number>(0);
  const [readingTime, setReadingTime] = useState<number>(0);

  const router = useRouter();

  const fetchIdea = async (id: any) => {
    try {
      console.log("Fetching Idea");
      // test loading page
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate an asynchronous data fetch
      const res = await getIdeaById(id);
      console.log(res);
      // Update the state with the found conversation
      if (res != undefined) {
        setIdea(res);
        setLoadProject(false);
        setIdeaDataDetail(res.details);
        setReadingTime(Math.floor(countWords(res.details) / 183));
      }
      // Update the state with the fetched conversation
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadProject(false);
    }
  };

  useEffect(() => {
    fetchIdea(id);
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
        <>
          <div
            className="min-w-screen standalone relative min-h-screen text-3xl"
            style={{ opacity: opacityContent }}
          >
            {standalone && (
              <div className="inner-element card-img_hover absolute inset-0 m-3 flex justify-end">
                <Link href={"/"} prefetch={true}>
                  <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full opacity-75 transition-all duration-300 hover:opacity-100">
                    <RiArrowGoBackFill size={40} className="text-white" />
                  </div>
                </Link>
              </div>
            )}

            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="mx-4 my-40 space-y-2 sm:mx-9 md:mx-[15vw] ">
                <h1 className="whitespace-normal text-center font-bold text-white">
                  {ideaData.name}
                </h1>

                <div>
                  <h2 className="whitespace-normal text-left text-[15px] font-thin text-white">
                    Author: {ideaData.author} - Estimate: {readingTime} minutes
                  </h2>
                  <div className="flex flex-wrap items-end justify-start gap-2 ">
                    {ideaData.techstack.map((tag: any, index: number) => (
                      // <p
                      //   key={`${index}-${tag.name}`}
                      //   className={`text-[12px]`}
                      //   style={{ color: tag.color }}
                      // >
                      //   #{tag.name}
                      // </p>
                      <img
                        src={convertBadgeUrl(tag.name, tag.color)}
                        key={`${index}-${tag.name}`}
                        className="opacity-75 transition-all duration-300 hover:opacity-100"
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 px-4 py-4 font-serif text-[0.5rem] text-base font-light text-[#9babf0] backdrop:backdrop-blur-sm sm:px-2 sm:py-2 sm:text-[1rem]">
                  <h3>Summary: {ideaData.summary}</h3>
                </div>

                {/* Render Markdown */}
                <div className="wrap items-center justify-center py-10 text-[0.5rem] text-white sm:text-[1rem]">
                  <article className="prose prose-invert max-w-none prose-headings:underline prose-a:text-blue-600 prose-img:rounded-xl">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {IdeaDataDetail}
                      {/* {STORE_MARKDOWN} */}
                    </ReactMarkdown>
                  </article>
                </div>
                {/* Using Render Markdown */}
              </div>
            </div>

            {!standalone && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
                <button
                  className="rounded-lg border border-white bg-transparent p-4 text-lg font-bold text-white transition duration-300 hover:bg-white hover:text-black"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Read More
                </button>
              </div>
            )}
          </div>
          {standalone && (
            <div>
              <ContactForm />
            </div>
          )}
        </>
      )}
    </div>
  );
};
// red sm:blue. -> red if small. for phone. bigger sm, will be show in : PC

export default IdeaPage;
