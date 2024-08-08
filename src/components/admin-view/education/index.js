"use client";

import { deleteData } from "@/services";
import FormControls from "../form-controls";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];


export default function AdminEducationView({handleSaveData, extractAllDatas, formData, setFormData , data}) {
  const handleDelete = async (id) => {
    const response = await deleteData("education", id);
    extractAllDatas();
  };
  return (
    
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="m-5 text-2xl font-bold ">Education Section</h1>
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
                      <FaEdit
                        class="absolute top-2 right-2 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-blue-600"
                      />
                      <MdDelete
                        onClick={() => handleDelete(item._id)}
                        class="absolute top-10 right-2 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-red-700"
                      />
                      <h2 class="text-lg font-semibold">{item.degree}</h2>
                      <p class="mt-2">{item.college}</p>
                      <p class="mt-2">{item.year}</p>
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
            destination="education"
          />
        </div>
      </div>
    </div>
  );
}
