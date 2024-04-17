/* eslint-disable react/no-unescaped-entities */
import AvatarCanvas from "./canvas/Avatar";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full" id="navbar">
      <div className="absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-1 px-6 sm:px-16 md:gap-5 ">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div className="w-[300px] sm:w-[800px]">
          <h1 className="mt-2 text-[40px] font-black text-white xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
            Hi, I'm{" "}
            <span className="text-[#915eff]">
              <Typewriter
                options={{
                  strings: "Long",
                  autoStart: true,
                  cursor: "_",
                }}
              />
            </span>
          </h1>
          <p className="text-[16px] font-medium text-[#ffffff9a] xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
            <Typewriter
              options={{
                strings:
                  "QA Automation Developer | Software Developer | Creative Thinker | Visionary ",
                autoStart: true,
                cursor: "|",
                loop: true,
                delay: 25,
                deleteSpeed: 10,
              }}
            />
          </p>
        </div>
        <AvatarCanvas />
      </div>
    </section>
  );
};

export default Hero;
