"use client";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function AdminContactView({ data }) {
  return (
    // <div className="flex flex-col items-center w-full h-screen">
    //   <h1 className="m-5 text-2xl font-bold ">Contact Section</h1>
    //   <div className="w-full pt-4 pb-4 mb-2">
    //     <div className="grid grid-cols-1 gap-10 mb-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    //       <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    //         {data && data.length
    //           ? data.map((item) => (
    //               <div className="flex flex-col items-center justify-center px-6 py-4">
    //                 <p className="mb-2 text-xl font-bold text-gray-800">
    //                   {item.name}
    //                 </p>
    //                 <p className="mb-2 text-base text-gray-600">{item.email}</p>
    //                 <p className="mb-2 text-base text-gray-600">
    //                   {item.message}
    //                 </p>
    //                 <div class="flex justify-center py-4">
    //                   <button class="bg-white border-2 font-semibold border-[#22215B] hover:bg-[#22215B] hover:text-white text-[#22215B] px-4 py-2 rounded">
    //                     Delete
    //                   </button>
    //                 </div>
    //               </div>
    //             ))
    //           : null}
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
                      <MdDelete class="absolute top-3 right-3 w-6 h-6 mt-2 mr-2 cursor-pointer  hover:text-red-700" />
                     
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
