import TechnicianInfo from "@/components/TechnicianInfo";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const techncicianRes = (
    await axios.get(`${process.env.URL}/api/marketing-technician`)
  ).data;
  return (
    <div className="h-screen w-full bg-cyan-500">
      <TechnicianInfo techncicianRes={techncicianRes} />
    </div>
  );
};

export default page;
