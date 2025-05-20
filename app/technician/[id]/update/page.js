import React from "react";
import TechnicianForm from "@/components/TechnicianForm";
export const dynamic = "force-dynamic";

const UpdateRetail = async ({ params }) => {
  const { id } = await params;

  const data = await (
    await fetch(`${process.env.URL}/api/marketing-technician/${id}`)
  ).json();

  console.log(data);

  return (
    <div className="w-full flex flex-col items-center justify-center sm:w-full ">
      <p className="text-sm font-bold uppercase text-orange-400 md:text-3xl flex justify-center items-end">
        Update Form
      </p>
      <TechnicianForm defaultItem={data} isUpdate={true} />
    </div>
  );
};

export default UpdateRetail;
