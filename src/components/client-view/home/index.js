"use client";


import Image from "next/image";
import profile from "../../../assets/profile.jpg"



export default function ClientHomeView({ data }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://karthiikresume.tiiny.site/";
    link.download = 'Karthik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-gray-200"
      id="home"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center justify-center my-8 transition duration-300 transform bg-gray-300 rounded-full w-50 h-50 hover:scale-110">
          <Image
            src={profile}
            width={150}
            height={150}
            alt="logo"
            className="rounded-full w-100 h-100"
          ></Image>
        </div>
        <h1 className="mb-4 text-3xl font-medium leading-normal lg:text-4xl xl:text-6xl">
          {data && data.length
            ? data[0]?.heading
                .split(" ")
                .map((item, index) => (
                  <span
                    className={`${
                      index === 2 ? "text-blue-500" : "text-[#000]"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))
            : null}
        </h1>
        <p className="text-[#000] mt-4 mb-8 font-semibold text-lg">
          {data && data.length ? data[0]?.summary : null}
        </p>
        <button
          onClick={handleDownload}
          className="px-4 py-2 mt-4 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
