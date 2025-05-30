import { FiEdit } from "react-icons/fi";
import Link from "next/link";

const TechnicianTable = ({ item }) => {
  const formattedDate = item?.date
    ? `${String(new Date(item.date).getDate()).padStart(2, "0")}-${String(
        new Date(item.date).getMonth() + 1
      ).padStart(2, "0")}-${new Date(item.date).getFullYear()}`
    : "undefined";

  return (
    <div className="w-full">
      <div className="hidden lg:flex  items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="grid grid-cols-[repeat(6,1fr)] gap-4 w-[90%]">
          <p className="truncate">{item?.technician_name}</p>
          <p className="truncate">{item?.technician_phone}</p>
          <p className="truncate ml-2">{item?.district}</p>
          <p className="truncate ml-3">{item?.address}</p>
          <p className="truncate  ml-4">{formattedDate}</p>
          <p className="truncate">{item?.comments}</p>
        </div>
        <div className="w-[10%] flex justify-center items-center">
          {item?._id && (
            <Link href={`/technician/${item._id}/update`}>
              <FiEdit className="text-gray-700 hover:text-blue-500 cursor-pointer" />
            </Link>
          )}
        </div>
      </div>

      <div className="block lg:hidden bg-white border rounded-md shadow-sm p-4 mb-3">
        <div className="mb-2 text-sm text-gray-700 space-y-1">
          <p className="truncate">
            <strong>Name:</strong>{" "}
            <span className="text-blue-700">{item?.technician_name}</span>
          </p>
          <p className="truncate">
            <strong>Phone:</strong> {item?.technician_phone}
          </p>
          <p className="truncate">
            <strong>District:</strong> {item?.district}
          </p>
          <p className="truncate">
            <strong>Address:</strong> {item?.address}
          </p>
          <p className="truncate">
            <strong>Date:</strong> {formattedDate}
          </p>
          <p className="truncate">
            <strong>Comments:</strong> {item?.comments}
          </p>
        </div>

        {item?._id && (
          <div className="flex justify-end">
            <Link href={`/technician/${item._id}/update`}>
              <FiEdit className="text-gray-700 hover:text-blue-500 cursor-pointer" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicianTable;
