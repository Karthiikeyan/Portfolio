"use client";

import { deleteData } from "@/services";
import { MdDelete } from "react-icons/md";

export default function AdminContactView({ data, extractAllDatas }) {
  const handleDelete = async (id) => {
    const response = await deleteData("contact", id);
    extractAllDatas();
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="m-5 text-2xl font-bold ">Contact Section</h1>
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
                      <MdDelete
                        onClick={() => handleDelete(item._id)}
                        class="absolute top-3 right-3 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-red-700"
                      />

                      <h2 class="text-lg font-semibold">{item.name}</h2>
                      <p class="mt-2">{item.email}</p>
                      <p class="mt-2">{item.message}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
