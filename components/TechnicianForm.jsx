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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Textarea from "@mui/joy/Textarea";

const TechnicianForm = ({ defaultItem, isUpdate }) => {
  const router = useRouter();

  const [item, setItem] = useState({
    ...defaultItem,
  });

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

  return (
    <div className="w-full flex items-center justify-center p-4 lg:p-6 lg:w-[50%] lg:gap-2 flex-col">
      <div className="w-full h-[100%] lg:h-[90%] flex gap-2 flex-col">
        <TextField
          type="text"
          label="Technician Name"
          name="technician_name"
          value={item.technician_name}
          onChange={handleChange}
        />
        <TextField
          type="text"
          label="Technician Phone"
          name="technician_phone"
          value={item.technician_phone}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="district-label">District</InputLabel>
          <Select
            labelId="district-label"
            name="district"
            value={item.district}
            label="District"
            onChange={handleChange}
          >
            {district.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="address"
          value={item.address}
          label="Address"
          type="text"
          onChange={handleChange}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            name="date"
            type="date"
            value={
              item.date && dayjs(item.date).isValid() ? dayjs(item.date) : null
            }
            onChange={(newValue) => {
              setItem((prev) => ({
                ...prev,
                date: newValue ? dayjs(newValue).format("YYYY-MM-DD") : "",
              }));
            }}
          />
        </LocalizationProvider>
        <Textarea
          type="text"
          name="comments"
          value={item.comments || ""}
          onChange={handleChange}
          label="Comments"
          placeholder="Type Here..."
          minRows={3}
        />
      </div>
      <div className="flex w-full justify-end gap-4 mt-3">
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
