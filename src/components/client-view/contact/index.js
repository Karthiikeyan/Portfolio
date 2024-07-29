"use client";

import { useEffect, useState } from "react";
import { addData } from "@/services";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

  const handleInstagramClick = () => {
    if (url.startsWith("http")) {
      window.location.href = "https://www.instagram.com/trendiikarthii";
    }
  };

  const handleTwitterClick = () => {
    window.location.href = "https://www.twitter.com/trendiikarthii";
  };

  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/trendiikarthii";
  };

  const handleLinkedinClick = () => {
    window.location.href = "https://www.linkedin.com/in/trendiikarthii";
  };

const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebook
        onClick={() => handleFacebookClick()}
        className="w-8 h-8 rounded-full hover:text-blue-700 hover:bg-white"
      />
    ),
  },
  {
    id: "twitter",
    icon: (
      <FaTwitter
        onClick={() => handleTwitterClick()}
        className="w-8 h-8 hover:text-sky-500"
      />
    ),
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedin
        onClick={() => handleLinkedinClick()}
        className="w-8 h-8 rounded hover:text-blue-500 hover:bg-white"
      />
    ),
  },
  {
    id: "instagram",
    icon: (
      <FaInstagram
        onClick={() => handleInstagramClick()}
        className="w-8 h-8 rounded-lg hover:bg-pink-400 hover:text-white"
      />
    ),
  },
];

const controls = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  async function handleSendMessage() {
    const res = await addData("contact", formData);
    console.log(res,'contact-res');

    if(res && res.success) {
        setFormData(initialFormData)
        setShowSuccessMessage(true)
    }
  }

  useEffect(()=>{
    if(showSuccessMessage) {
        setTimeout(()=>{
           setShowSuccessMessage(false)
        },1500)
    }

  },[showSuccessMessage])

  const isValidForm = () => {
    return formData &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
      ? true
      : false;
  };

  console.log(isValidForm(), 'isValidForm()');

  return (
    <div
      className="max-w-screen-xl px-6 mx-auto mt-24 mb-6 sm:mt-14 sm:mb-14 sm:px-8 lg:px-16"
      id="contact"
    >
      <div className={"py-6"}>
        <div className="flex flex-col items-center justify-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"Contact Me".split(" ").map((item, index) => (
              <span
                className={`${index === 1 ? "text-blue-500" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div className="relative text-gray-500">
        <div className="container px-5">
          <div className="max-w-md p-6 mx-auto bg-white rounded shadow-md">
            <div className="flex flex-wrap -m-2">
              {controls.map((controlItem) =>
                controlItem.name === "message" ? (
                  <div className="w-full max-w-md p-6 mx-auto bg-white rounded">
                    <div key={controlItem.name}>
                      <label className="block text-sm font-medium text-gray-700">
                        {controlItem.label}
                      </label>
                      <textarea
                        placeholder={controlItem.placeholder}
                        type={controlItem.type}
                        name={controlItem.name}
                        id={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          });
                        }}
                        className="w-full px-3 py-2 mt-1 mb-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-md p-6 mx-auto bg-white rounded">
                    <div key={controlItem.name}>
                      <label className="block text-sm font-medium text-gray-700">
                        {controlItem.label}
                      </label>
                      <input
                        placeholder={controlItem.placeholder}
                        type={controlItem.type}
                        name={controlItem.name}
                        id={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          });
                        }}
                        className="w-full px-3 py-2 mt-1 mb-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                )
              )}
              {showSuccessMessage && (
                <p className="text-[14px] font-bold my-[8px] bg-green-500">
                  Your message is successfully delivered !
                </p>
              )}
              <div className="w-full p-2">
                <button
                  disabled={!isValidForm()}
                  onClick={handleSendMessage}
                  className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex justify-around max-w-md p-6 mx-auto bg-white rounded shadow-md">
          {socialIcons.map((icons, index) => (
            <div key={index}>
              <div>{icons.icon}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center p-5 mt-10">
          <p className="mb-4 font-medium text-semibold">
            💙 Thanks for Visiting ✨
          </p>
        </div>
      </div>
    </div>
  );
}
