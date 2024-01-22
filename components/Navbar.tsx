"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Narbar = () => {
  const [isOn, setOn] = useState(false);

  return (
    <div className="fixed top-0 z-20 flex w-screen items-center bg-[#121212] px-6 py-5 sm:px-16">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="#navbar"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="cursor-pointer text-[18px] font-bold text-white">
            Long Nguyen<span className="hidden sm:block">| Portfolio</span>
          </p>
        </Link>
      </div>

      <NavigationMenu className="hidden list-none flex-row justify-end gap-10 sm:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#project" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Project
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="./Resume Long Nguyen.pdf"
              target="_blank"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Resume
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        <span
          className={`cursor-pointer rounded-md px-4 py-2 text-[18px] text-white transition-all duration-500 hover:font-extrabold ${
            isOn ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => {
            setOn(!isOn);
          }}
        >
          &gt;|
        </span>
        <div
          className={`${
            isOn ? "flex" : "hidden"
          } absolute right-6 top-14 z-10 mx-2 my-2 min-w-[100px] gap-10 rounded-xl bg-black p-6 transition-all duration-300`}
        >
          <NavigationMenu
            className="flex list-none flex-col items-start justify-end gap-4"
            onClick={() => {
              setOn(!isOn);
            }}
          >
            <NavigationMenuList className="flex flex-col">
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#project" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Project
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="./Resume Long Nguyen.pdf"
                  target="_blank"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Resume
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>

    // <NavigationMenu className="flex list-none flex-col items-start justify-end gap-4">
    //   <NavigationMenuList className="flex flex-col">
    //     <NavigationMenuItem>
    //       <Link href="#about" legacyBehavior passHref>
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //           About
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <Link href="#project" legacyBehavior passHref>
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //           Project
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <Link href="#contact" legacyBehavior passHref>
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //           Contact
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>
  );
};

export default Narbar;
