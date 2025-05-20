"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RetailTable from "@/components/TechnicianTable";
import { FaPlusSquare } from "react-icons/fa";

const headers = ["Name", "Phnoe", "District", "Location"];

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
    let filterInformation = [];

    if (state.search === "") {
      filterInformation = [...techncicianRes];
    } else {
      filterInformation = [...techncicianRes].filter(
        (x) =>
          x.technician_name
            .toLowerCase()
            .includes(state.search.toLowerCase()) ||
          x.technician_phone
            .toLowerCase()
            .includes(state.search.toLowerCase()) ||
          x.district.toLowerCase().includes(state.search.toLowerCase()) ||
          x.address.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    setState((prev) => ({
      ...prev,
      data: [...filterInformation],
    }));
  }, [state.search]);

  return (
    <div className="h-[100%] w-full flex flex-col">
      <div className="flex h-[10%] w-full justify-between bg-gray-800 items-center p-2">
        <div className="flex items-center justify-end">
          <p className="text-white uppercase lg:flex hidden">
            Technician Information
          </p>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <button className="text-white p-4">
            <Link href={"/technician/add"}>
              <FaPlusSquare className="h-7 w-7" />
            </Link>
          </button>
          <input
            type="search"
            placeholder="Search..."
            className="h-[35px] px-2 rounded-md flex items-center justify-center bg-white text-black "
            value={state.searchItem}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="h-[90%] w-full flex justify-center bg-white p-1">
        <div className="h-[99%] w-full flex flex-col">
          <div className="hidden h-[8%] lg:flex bg-gray-800 items-center">
            <div className="w-[90%] grid grid-cols-[repeat(4,1fr)] p-2">
              {headers.map((x) => (
                <p key={x} className="text-white lg:uppercase text-sm ">
                  {x}
                </p>
              ))}
            </div>
            <p className="w-[10%] text-white text-center">ACTION</p>
          </div>
          <div className="h-[92%] overflow-y-scroll">
            {state.data.map((x, i) => (
              <div
                key={i}
                className={`${i % 2 == 0 ? "bg-slate-100" : "bg-slate-200"}`}
              >
                <RetailTable item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianInfo;
