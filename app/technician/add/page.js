import React from "react";
import TechnicianForm from "@/components/TechnicianForm";
export const dynamic = "force-dynamic";

const defaultItem = {
  technician_name: "",
  technician_phone: "",
  district: "",
  address: "",
  date: "",
};

const AddTechncian = async () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 sm:gap-4">
      <div className="h-[90%] lg:h-[85%] lg:w-[80%] w-[100%] flex flex-col items-center justify-center bg-white ">
        <p className="text-orange-500 uppercase text-3xl">New Technician</p>
        <TechnicianForm defaultItem={defaultItem} isUpdate={false} />
      </div>
    </div>
  );
};

export default AddTechncian;
