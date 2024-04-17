import SectionWrapper from "@/hoc/SectionWrapper";
import { Button } from "./ui/button";

const SocialMedia = () => {
  const icons = [
    {
      platform: "Facebook",
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/k.anos1234/",
      color: "#4267B2",
    },
    {
      platform: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/long_nguyen197/",
      color: "#E1306C",
    },
    {
      platform: "LinkedIn",
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/longnguyen-vhoang/",
      color: "#2867B2",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center py-5">
        <div className="mb-16 inline-flex flex-wrap justify-center">
          <a href="./Resume Long Nguyen.pdf" target="_blank">
            <button className="w-fit rounded-xl bg-[#222831] px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none">
              VIEW RESUME
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="mb-24 inline-flex flex-wrap justify-center">
          {icons.map((icon) => (
            <>
              <a
                key={icon.platform}
                href={icon.link}
                className="group relative mr-[40px] text-[#FFFFFF]"
              >
                <div className="group h-[55px] w-[55px] transition-all duration-500 hover:rotate-[-35deg] hover:skew-x-[30deg]">
                  <span
                    className={`absolute left-0 top-0 h-full w-full rounded-lg border transition-all duration-150 group-hover:opacity-20`}
                    style={{
                      borderColor: icon.color,
                      color: icon.color,
                      boxShadow: "-1px 1px 3px " + icon.color,
                    }}
                  ></span>
                  <span
                    className={`absolute left-0 top-0 h-full w-full transform rounded-lg border transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-5 group-hover:opacity-40`}
                    style={{
                      borderColor: icon.color,
                      color: icon.color,
                      boxShadow: "-1px 1px 3px " + icon.color,
                    }}
                  ></span>
                  <span
                    className={` absolute left-0 top-0 h-full w-full transform rounded-lg border transition-all duration-300 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:opacity-60`}
                    style={{
                      borderColor: icon.color,
                      color: icon.color,
                      boxShadow: "-1px 1px 3px " + icon.color,
                    }}
                  ></span>
                  <span
                    className={`absolute left-0 top-0 h-full w-full transform rounded-lg border transition-all duration-500 group-hover:-translate-y-15 group-hover:translate-x-15 group-hover:opacity-80`}
                    style={{
                      borderColor: icon.color,
                      color: icon.color,
                      boxShadow: "-1px 1px 3px " + icon.color,
                    }}
                  ></span>
                  <span
                    className={`${icon.icon} flex transform items-center justify-center rounded-lg border text-[30px] leading-[55px] transition-all duration-700 group-hover:-translate-y-20 group-hover:translate-x-20 group-hover:opacity-100`}
                    style={{
                      borderColor: icon.color,
                      color: icon.color,
                      boxShadow: "-1px 1px 3px " + icon.color,
                    }}
                  ></span>
                </div>
                <div
                  className={`absolute bottom-[-5px] left-1/2 -translate-x-1/2 transform opacity-0 transition-all duration-500 group-hover:bottom-[-35px] group-hover:opacity-100`}
                  style={{ borderColor: icon.color, color: icon.color }}
                >
                  {icon.platform}
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SocialMedia, "");
