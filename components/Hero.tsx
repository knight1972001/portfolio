/* eslint-disable react/no-unescaped-entities */
import AvatarCanvas from "./canvas/Avatar";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full" id="navbar">
      <div className="absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-1 px-6 sm:px-16 md:gap-5 ">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
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
                strings: "Software Engineer | Full-Stack Developer ",
                autoStart: true,
                cursor: "|",
                loop: false,
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
