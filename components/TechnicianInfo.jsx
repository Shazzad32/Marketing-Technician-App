// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import RetailTable from "@/components/TechnicianTable";
// import { FaPlusSquare } from "react-icons/fa";

// const headers = ["Name", "Phnoe", "District", "Location"];

// const TechnicianInfo = ({ techncicianRes }) => {
//   const [state, setState] = useState({
//     data: [...techncicianRes],
//     search: "",
//   });

//   const handleSearch = (e) => {
//     const search = e.target.value.toLowerCase();
//     setState((prev) => ({
//       ...prev,
//       search: search,
//     }));
//   };

//   useEffect(() => {
//     let filterInformation = [];

//     if (state.search === "") {
//       filterInformation = [...techncicianRes];
//     } else {
//       filterInformation = [...techncicianRes].filter(
//         (x) =>
//           x.technician_name
//             .toLowerCase()
//             .includes(state.search.toLowerCase()) ||
//           x.technician_phone
//             .toLowerCase()
//             .includes(state.search.toLowerCase()) ||
//           x.district.toLowerCase().includes(state.search.toLowerCase()) ||
//           x.address.toLowerCase().includes(state.search.toLowerCase())
//       );
//     }

//     setState((prev) => ({
//       ...prev,
//       data: [...filterInformation],
//     }));
//   }, [state.search]);

//   return (
//     <div className="h-[100%] w-full flex flex-col">
//       <div className="flex h-[10%] w-full justify-between bg-gray-800 items-center p-2">
//         <div className="flex items-center justify-end">
//           <p className="text-white uppercase lg:flex hidden">
//             Technician Information
//           </p>
//         </div>
//         <div className="flex gap-6 items-center justify-end">
//           <button className="text-white p-4">
//             <Link href={"/technician/add"}>
//               <FaPlusSquare className="h-7 w-7" />
//             </Link>
//           </button>
//           <input
//             type="search"
//             placeholder="Search..."
//             className="h-[35px] px-2 rounded-md flex items-center justify-center bg-white text-black "
//             value={state.searchItem}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>
//       <div className="h-[90%] w-full flex justify-center bg-white p-1">
//         <div className="h-[99%] w-full flex flex-col">
//           <div className="hidden h-[8%] lg:flex bg-gray-800 items-center">
//             <div className="w-[90%] grid grid-cols-[repeat(4,1fr)] p-2">
//               {headers.map((x) => (
//                 <p key={x} className="text-white lg:uppercase text-sm ">
//                   {x}
//                 </p>
//               ))}
//             </div>
//             <p className="w-[10%] text-white text-center">ACTION</p>
//           </div>
//           <div className="h-[92%] overflow-y-scroll">
//             {state.data.map((x, i) => (
//               <div
//                 key={i}
//                 className={`${i % 2 == 0 ? "bg-slate-100" : "bg-slate-200"}`}
//               >
//                 <RetailTable item={x} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechnicianInfo;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RetailTable from "@/components/TechnicianTable";
import { FaPlusSquare } from "react-icons/fa";

const headers = ["Name", "Phone", "District", "Location", "Date"];

const TechnicianInfo = ({ techncicianRes }) => {
  const [state, setState] = useState({
    data: [...techncicianRes],
    search: "",
  });

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setState((prev) => ({
      ...prev,
      search: search,
    }));
  };

  useEffect(() => {
    const filterInformation =
      state.search === ""
        ? [...techncicianRes]
        : techncicianRes.filter((x) =>
            [x.technician_name, x.technician_phone, x.district, x.address]
              .join(" ")
              .toLowerCase()
              .includes(state.search.toLowerCase())
          );

    setState((prev) => ({
      ...prev,
      data: [...filterInformation],
    }));
  }, [state.search, techncicianRes]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-white text-xl font-semibold uppercase mb-2 lg:mb-0">
          Technician Information
        </h1>
        <div className="flex gap-4 items-center w-full lg:w-auto">
          <Link href="/technician/add">
            <FaPlusSquare className="text-white h-7 w-7 cursor-pointer hover:text-green-400" />
          </Link>
          <input
            type="search"
            placeholder="Search..."
            className="w-full lg:w-64 h-10 px-3 rounded-md bg-white text-sm text-gray-700 focus:outline-none shadow"
            value={state.search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="flex-1 w-full overflow-x-auto p-4">
        <div className="w-full max-w-full mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <div className="hidden lg:grid grid-cols-[repeat(5,1fr)_100px] bg-gray-700 text-white text-sm font-semibold uppercase px-4 py-2 sticky top-0 z-10">
            {headers.map((header) => (
              <p key={header}>{header}</p>
            ))}
            <p className="text-center">Action</p>
          </div>

          <div className="max-h-[77vh] overflow-y-auto">
            {state.data.length > 0 ? (
              state.data.map((x, i) => (
                <div
                  key={i}
                  className={`${i % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}`}
                >
                  <RetailTable item={x} />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">
                No matching technicians found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianInfo;
