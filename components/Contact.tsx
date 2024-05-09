"use client";
import { SectionWrapper } from "@/hoc/page";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import HologramCanvas from "./canvas/Hologram";
import emailjs from "@emailjs/browser";
import { checkValidEmail } from "@/utils/utils";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const serviceEmail = process.env.NEXT_PUBLIC_SERVICE_EMAILJS as string;

  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (form.email != "" && checkValidEmail(form.email) && form.message != "") {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_EMAILJS as string,
          process.env.NEXT_PUBLIC_TEMPLATE_EMAILJS as string,
          {
            from_name: form.name,
            to_name: "Long Nguyen",
            from_email: form.email,
            to_email: "knight1972001@gmail.com",
            message: form.message,
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS,
        )
        .then(
          () => {
            setLoading(false);
            alert(
              `Thank you ${form.name}. I will get back to you as soon as possible.`,
            );

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          },
        );
    } else {
      alert("Please enter a valid email!");
    }
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-[#232D3F] p-8"
      >
        <p className="text-[14px] uppercase tracking-wider text-[#aaa6c3] sm:text-[18px]">
          Keep in touch with me
        </p>
        <h3 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="rounded-lg border-none bg-[#222831] px-6 py-4 font-medium text-white outline-none placeholder:text-[#aaa6c3]"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email:</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="johnSmith@example.com"
              className="rounded-lg border-none bg-[#222831] px-6 py-4 font-medium text-white outline-none placeholder:text-[#aaa6c3]"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your message:</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="rounded-lg border-none bg-[#222831] px-6 py-4 font-medium text-white outline-none placeholder:text-[#aaa6c3]"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-[#222831] px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
          >
            Send
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        // className="h-full md:h-full xl:h-full xl:flex-1"
      >
        <HologramCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
