"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = (Component: any, idName: string) =>
  function HOC(data: any = null) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-16"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {data ? <Component data={data} /> : <Component />}
      </motion.section>
    );
  };

export default SectionWrapper;
