"use client";

import { deleteData } from "@/services";
import FormControls from "../form-controls";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
];

export default function AdminProjectView({ formData, extractAllDatas, setFormData , handleSaveData , data }) {
  const handleDelete = async (id) => {
    const response = await deleteData("project", id);
    extractAllDatas();
  };
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="m-5 text-2xl font-bold ">Project Section</h1>
      <div className="flex flex-col w-full gap-8 pt-4 pb-4 mb-2">
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {data && data.length
              ? data.map((item, index) => (
                  <div
                    class="bg-white rounded-md shadow-lg p-4 relative"
                    key={index}
                  >
                    <div className="w-full p-4 border border-blue-400 rounded">
                      <FaEdit class="absolute top-2 right-2 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-blue-600" />
                      <MdDelete
                        onClick={() => handleDelete(item._id)}
                        class="absolute top-10 right-2 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-red-700"
                      />
                      <h2 class="text-lg font-semibold">{item.name}</h2>
                      <p class="mt-2">{item.technologies}</p>
                      <p class="mt-2">{item.website}</p>
                      <p class="mt-2">{item.github}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div>
          <FormControls
            controls={controls}
            formData={formData}
            setFormData={setFormData}
            handleSaveData={handleSaveData}
            destination="project"
          />
        </div>
      </div>
    </div>
  );
}
