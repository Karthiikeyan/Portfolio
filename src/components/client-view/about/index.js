"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../assets/about-image.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ClientAboutView({ data }) {
  console.log(data, "aboutdata");

  const setVariants = useMemo(() => variants(), []);

  const aboutDataInfo = [
    {
      label: "Client",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];

  const headingText = "Why Hire Me For Your Next Project ?";

  return (
    <div
      className="max-w-screen-xl px-6 mx-auto mt-24 mb-6 sm:mt-14 sm:mb-14 sm:px-8 lg:px-16"
      id="about"
    >
      <div className="flex w-full">
        <AnimationWrapper className="z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 rounded-lg sm:grid-cols-3 py-9 sm:divide-y-0 sm:divide-x-2 divide-green-main bg-ehite-500">
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className={`flex items-center justify-start
                ${
                  index === 0
                    ? "sm:justify-start"
                    : index === 1
                    ? "sm:justify-center"
                    : "sm:justify-end"
                } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
                `}
              key={index}
              custom={{ duration: 2 + index }}
              variants={setVariants}
            >
              <div className="flex w-40 m-0 sm:w-auto">
                <div className="flex flex-col">
                  <p className="text-[50px] text-green-main font-bold">
                    {infoItem.value}+
                  </p>
                  <p className="text-[25px] font-bold text-[#000000]">
                    {infoItem.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimationWrapper>
      </div>
      <AnimationWrapper className={"pt-6"}>
        <div className="flex flex-col items-center justify-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {headingText.split(" ").map((item, index) => (
              <span
                className={`${index === 6 ? "text-green-main" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
          <p className="text-[#000] mt-4 mb-8 font-bold">{data?.aboutme}</p>
        </div>
      </AnimationWrapper>
      <div className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-flow-col sm:grid-cols-2">
        <AnimationWrapper className="flex w-full">
          <motion.div variants={setVariants} className="w-full h-full p-4">
            <Image
              src={aboutMeImage}
              alt="About Me"
              layout="responsive"
              height={414}
              width={508}
              quality={100}
            />
          </motion.div>
        </AnimationWrapper>
        <AnimationWrapper className={"flex items-center w-full p-4"}>
          <motion.div
            variants={setVariants}
            className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
          >
            {(data?.skills ?? "").split(",").map((skill, index) => (
              <motion.div
                key={index} // Added key to prevent warning for unique keys
                className="flex items-center justify-center w-full"
                variants={skillItemVariant}
              >
                <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[160px] px-6 border-[2px] border-green-main bg-[#fff] text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-main transition-all outline-none">
                  {skill}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
