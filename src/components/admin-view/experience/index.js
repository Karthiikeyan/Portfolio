"use client";

import { deleteData, updateData } from "@/services";
import FormControls from "../form-controls";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";


const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

export default function AdminExperienceView({
  formData,
  handleSaveData,
  setFormData,
  resetFormDatas,
  data,
  extractAllDatas,
}) {

      const [editMode, setEditMode] = useState(false);
      const [editId, setEditId] = useState(null);

      const handleEdit = (item) => {
        setFormData(item);
        setEditId(item._id);
        setEditMode(true);
      };

  const handleDelete = async (id) => {
    const response = await deleteData("experience", id);
    extractAllDatas();
  };

      const handleSubmit = async () => {
        if (editMode) {
          const response = await updateData("experience", {
            ...formData,
            _id: editId,
          });
          resetFormDatas();
          extractAllDatas();
          setEditMode(false);
          setEditId(null);
        } else {
          handleSaveData();
        }
      };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="m-5 text-2xl font-bold ">Experience Section</h1>
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
                        onClick={() => handleEdit(item)}
                        class="absolute top-3 right-3 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-blue-600"
                      />
                      <MdDelete
                        onClick={() => handleDelete(item._id)}
                        class="absolute top-11 right-3 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-red-700"
                      />
                      <h2 class="text-lg font-semibold">{item.position}</h2>
                      <p class="mt-2">{item.company}</p>
                      <p class="mt-2">{item.duration}</p>
                      <p class="mt-2">{item.location}</p>
                      <p class="mt-2">{item.jobprofile}</p>
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
            handleSaveData={handleSubmit}
            destination="experience"
            mode={editMode}
          />
        </div>
      </div>
    </div>
  );
}
