"use client";
import { SectionWrapper } from "@/hoc/page";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { slideIn } from "@/utils/motion";
import emailjs from "@emailjs/browser";
import { checkValidEmail } from "@/utils/utils";

const ContactForm = () => {
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

    if (form.email != "" && checkValidEmail(form.email)) {
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
    <div className="standalone flex items-center justify-center xl:mt-12">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-[#232D3F] p-8"
      >
        <p className="text-[10px] uppercase tracking-wider text-[#aaa6c3] sm:text-[18px]">
          Keep in touch with me
        </p>
        <h3 className="text-[20px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8 sm:mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-2 font-medium text-white sm:mb-4">
              Your name:
            </span>
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
            <span className="mb-2 font-medium text-white sm:mb-4">
              Your email:
            </span>
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
            <span className="mb-2 font-medium text-white sm:mb-4">
              Your message:
            </span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="rounded-lg border-none bg-[#222831] px-6 py-4 font-medium text-white outline-none placeholder:text-[#aaa6c3]"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-[#222831] px-8 py-1 font-bold text-white shadow-md shadow-primary outline-none sm:py-3"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
