"use client";

import Image from "next/image";
import aboutMeImage from "../../../assets/about-image.png";


export default function ClientAboutView({ data }) {
  console.log(data, "aboutdata");


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

  const headingText = "Why do you Hire Me?";

  return (
    <div
      className="flex flex-col max-w-screen-xl gap-8 px-6 mx-auto mt-24 mb-4 sm:mt-14 sm:mb-14 sm:px-8 lg:px-16"
      id="about"
    >
      <div className="flex items-center justify-center">
        <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
          {headingText.split(" ").map((item, index) => (
            <span
              className={`${index === 3 ? "text-blue-500" : "text-[#000]"}`}
            >
              {item}{" "}
            </span>
          ))}
        </h1>
      </div>

      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 w-full">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
            {data?.aboutme.split(". ").map((item, index) => (
              <ul class="list-disc pl-4 mt-2" key={index}>
                <li>{item}</li>
              </ul>
            ))}
          </div>

          <div class="flex flex-col w-full items-center justify-center">
            {aboutDataInfo.map((infoItem, index) => (
              <div class="p-4 w-full justify-center items-center flex border-b-2 border-blue-500" key={index}>
                <p class="text-lg font-semibold">{infoItem.value}+</p>
                <p class="text-lg font-semibold">{infoItem.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center justify-center p-4">
            <Image
              src={aboutMeImage}
              alt="About Me"
              layout="responsive"
              height={414}
              width={508}
              quality={100}
              class="w-48 h-48 rounded-full border-4 border-white"
            />{" "}
          </div>

          <div className="p-4">
            <h2 className="my-4 text-3xl font-bold text-gray-800 lg:text-4xl">Skills</h2>

            <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {(data?.skills ?? "").split(",").map((skill, index) => (
                <div className="p-2 text-center bg-blue-200 rounded-lg">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
