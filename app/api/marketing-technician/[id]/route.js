import { connectToDb } from "@/utils/database";
import marketingTechnician from "@/models/marketingTechnician";

export const GET = async (req, { params }) => {
  const { id } = await params;

  try {
    await connectToDb();
    const technician = await marketingTechnician.findById(id);

    if (!technician) {
      return new Response("Technician not found", { status: 404 });
    }

    return new Response(JSON.stringify(technician), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const { id } = await params;

  try {
    await connectToDb();

    const { technician_name, technician_phone, address, district, date } =
      await req.json();

    const technician = await marketingTechnician.findById(id);

    if (!technician) {
      return new Response("Technician not found", { status: 404 });
    }

    technician.technician_name = technician_name;
    technician.technician_phone = technician_phone;
    technician.district = district;
    technician.address = address;
    technician.date = date;

    await technician.save();

    return new Response("Item saved successfully", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    await connectToDb();

    const deleted = await marketingTechnician.findByIdAndDelete(id);
    if (!deleted) {
      return new Response("Technician not found", { status: 404 });
    }

    return new Response(
      JSON.stringify({ message: "Item deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
