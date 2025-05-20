import { FiEdit } from "react-icons/fi";
import Link from "next/link";

const TechnicianTable = ({ item }) => {
  return (
    <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
      <div className="hidden lg:w-[90%] lg:grid lg:grid-cols-[repeat(4,1fr)] lg:p-2">
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.technician_name}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.technician_phone}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.district}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.address}
        </p>
      </div>
      <div className="block lg:hidden w-full bg-white border-2 border-blue-300 justify-center items-center p-2 shadow-md rounded-md ">
        <p>
          <strong>
            Name: <span className="text-red-700">{item?.technician_name}</span>
          </strong>
        </p>
        <p>
          <strong>Phone :</strong> {item?.technician_phone}
        </p>

        <p>
          <strong>District :</strong> {item?.district}
        </p>
        <p>
          <strong>Address :</strong> {item?.address}
        </p>

        <p className="flex float-right mt-[-150px] relative top-0">
          {item?._id && (
            <Link href={`/technician/${item._id}/update`}>
              <FiEdit className="text-black" />
            </Link>
          )}
        </p>
      </div>

      <div className="hidden w-[10%] h-full lg:flex justify-center items-center gap-8">
        {item?._id && (
          <Link href={`/technician/${item._id}/update`}>
            <FiEdit className="text-black" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TechnicianTable;
