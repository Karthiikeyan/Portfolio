"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className="max-w-screen-xl px-6 mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 sm:px-4 lg:px-8"
      id="experience"
    >
      <div className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-flow-col sm:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className={"py-6 sm:py-16"}>
            <div className="flex flex-col items-center justify-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Experince".split(" ").map((item, index) => (
                  <span
                    className={`${
                      index === 1 ? "text-blue-500" : "text-[#000]"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </div>
          <div>
            <div className="flex w-full">
              <div className="container">
                <Timeline position="alternate">
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem, index) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-blue-500" />
                            <TimelineConnector className="bg-blue-500" />
                          </TimelineSeparator>
                          <TimelineContent key={index}>
                            <div className="border-[2px] p-4 rounded-[8px] border-blue-500 mt-[14px] ml-[16px]">
                              <h3 className="mt-2 font-extrabold">
                                {experienceItem.company},{" "}
                                {experienceItem.location}
                              </h3>
                              <p className="mt-2 font-extrabold">
                                {experienceItem.position}
                              </p>
                              <p className="mt-2 font-extralight">
                                {experienceItem.jobprofile}
                              </p>
                              <p className="font-bold">
                                {experienceItem.duration}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className={"py-6 sm:py-16"}>
            <div className="flex flex-col items-center justify-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    className={`${
                      index === 1 ? "text-blue-500" : "text-[#000]"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </div>
          <div>
            <div className="flex w-full">
              <div className="container">
                <Timeline  position="alternate">
                  {educationData && educationData.length
                    ? educationData.map((educationItem, index) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-blue-500" />
                            <TimelineConnector className="bg-blue-500" />
                          </TimelineSeparator>
                          <TimelineContent key={index}>
                            <div className="border-[2px] p-4 rounded-[8px] border-blue-500 mt-[14px] ml-[16px]">
                              <h3 className="mt-2 font-extrabold">
                                {educationItem.college}
                              </h3>
                              <p className="mt-2 font-bold">
                                {educationItem.degree}
                              </p>
                              <p className="font-medium">
                                {educationItem.year}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
