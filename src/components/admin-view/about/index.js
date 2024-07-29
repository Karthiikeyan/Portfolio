"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({formData, setFormData , handleSaveData}) {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="m-5 text-2xl font-bold ">About Section</h1>
      <div className="w-full pt-4 pb-4 mb-2">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
          handleSaveData={handleSaveData}
          destination="about"
        />
      </div>
    </div>
  );
}
