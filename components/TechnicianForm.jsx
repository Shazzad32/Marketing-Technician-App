"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { district } from "@/data";

const TechnicianForm = ({ defaultItem, isUpdate }) => {
  const router = useRouter();

  const [item, setItem] = useState({
    ...defaultItem,
  });

  // const [errors, setErrors] = useState({
  //   device_price: "",
  // });

  // const validateFields = () => {
  //   let newErrors = {};

  //   if (item.is_complete && item.install_purpose === "New_Install") {
  //     const price = parseFloat(item.device_price);

  //     if (!item.device_price) {
  //       newErrors.device_price = "Price required";
  //     } else if (isNaN(price) || price < 1500 || price > 8000) {
  //       newErrors.device_price = "Device Price must be between 1500 and 8000";
  //     }
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const saveDevice = async () => {
    const res = await fetch("/api/marketing-technician/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (res.ok) {
      router.refresh();
      router.push("/technician");
    } else {
      throw new Error("Failed to save data");
    }
  };

  const updateDevice = async () => {
    const res = await fetch(`/api/marketing-technician/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!res.ok) {
      throw new Error("Failed to update device");
    }
    router.push("/technician");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSwitchChange = (name) => {
  //   setItem((prevValue) => ({
  //     ...prevValue,
  //     [name]: !prevValue[name],
  //   }));
  // };

  return (
    <div className="w-full flex items-center justify-center p-4 lg:p-6 lg:w-[50%] lg:gap-2 flex-col">
      <div className="w-full h-[100%] lg:h-[90%] flex gap-2 flex-col">
        <TextField
          type="text"
          label="Technician Name"
          name="technician_name"
          value={item.technician_name}
          // value={item.device_id || ""}
          onChange={handleChange}
          // disabled={isUpdate}
        />
        <TextField
          type="text"
          label="Technician Phone"
          name="technician_phone"
          value={item.technician_phone}
          onChange={handleChange}
        />
        <TextField
          name="district"
          value={item.district}
          label="District"
          type="text"
          onChange={handleChange}
        />
        <TextField
          name="address"
          value={item.address}
          label="Address"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full justify-end gap-4">
        <Button variant="outlined">
          <Link href="/technician">Cancel</Link>
        </Button>
        <Button
          onClick={isUpdate ? updateDevice : saveDevice}
          variant="outlined"
        >
          {isUpdate ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default TechnicianForm;
