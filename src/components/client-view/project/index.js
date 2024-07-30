"use client";

import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";


export default function ClientProjectView({ data }) {
  const router = useRouter();

  return (
    <div
      className="w-full px-6 py-10 mt-20 mb-16 bg-gray-200 sm:mt-14 sm:mb-14 sm:px-8 lg:px-16"
      id="project"
    >
      <div className={"py-6 sm:py-16"}>
        <div className="flex flex-col items-center justify-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"My Projects".split(" ").map((item, index) => (
              <span
                className={`${index === 1 ? "text-blue-500" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </div>
      {data && data.length ? (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div  key={index}>
              <div className="relative p-4 m-2 bg-white rounded-md shadow-lg">
                <FaExternalLinkAlt
                  className="absolute top-0 right-0 w-4 h-4 mt-2 mr-2 cursor-pointer hover:text-blue-400"
                  onClick={() => router.push(item.website)}
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="mt-2">{item.createdAt.split("T")[0]}</p>

                <div className="flex mt-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  {item?.technologies.split(",").map((techItem, techIndex) => (
                    <span
                      className="px-2 py-1 mr-2 text-sm bg-gray-200 rounded"
                      key={techIndex}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => router.push(item.github)}
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
