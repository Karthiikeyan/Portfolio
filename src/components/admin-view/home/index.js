"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Enter heading text",
  },
  {
    name: "summary",
    placeholder: "Enter Career summary",
    type: "text",
    label: "Enter Career summary",
  },
];

export default function AdminHomeView({ formData, setFormData, handleSaveData }) {
  console.log(formData);
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="m-5 text-2xl font-bold ">Home Section</h1>
      <div className="w-full pt-4 pb-4 mb-2">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
          handleSaveData={handleSaveData}
          destination="home"
        />
      </div>
    </div>
  );
}
