"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RetailTable from "@/components/TechnicianTable";
import { FaPlusSquare } from "react-icons/fa";

const headers = ["Name", "Phone", "District", "Location", "Date", "Comments"];

const TechnicianInfo = ({ techncicianRes }) => {
  const [state, setState] = useState({
    data: [...techncicianRes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ),
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
    const filteredData = state.search
      ? techncicianRes.filter((x) =>
          [x.technician_name, x.technician_phone, x.district, x.address]
            .join(" ")
            .toLowerCase()
            .includes(state.search)
        )
      : techncicianRes;

    const sortedData = [...filteredData].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    setState((prev) => ({
      ...prev,
      data: sortedData,
    }));
  }, [state.search, techncicianRes]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-white text-xl font-semibold uppercase mb-2 lg:mb-0">
          Technician Information
        </h1>
        <div className="flex gap-4 items-center w-full lg:w-auto">
          <Link href="/technician/add">
            <FaPlusSquare className="text-white h-9 w-9 cursor-pointer hover:text-green-400" />
          </Link>
          <input
            type="search"
            placeholder="Search..."
            className="w-full lg:w-64 h-12 px-3 rounded-md bg-white text-sm text-gray-700 focus:outline-none shadow"
            value={state.search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="flex-1 w-full overflow-x-auto p-1">
        <div className="w-full max-w-full mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <div className="hidden lg:grid grid-cols-[repeat(6,1fr)_100px] bg-gray-700 text-white text-sm font-semibold uppercase px-4 py-2 sticky top-0 z-10">
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
