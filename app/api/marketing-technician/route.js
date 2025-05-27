import { connectToDb } from "@/utils/database";
import marketingTechnician from "@/models/marketingTechnician";

export const GET = async () => {
  try {
    await connectToDb();

    const data = await marketingTechnician.find();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const { technician_name, technician_phone, district, address, date } =
      await req.json();

    await connectToDb();

    const newTechnician = new marketingTechnician({
      technician_name,
      technician_phone,
      district,
      address,
      date,
    });

    await newTechnician.save();

    return new Response(JSON.stringify(newTechnician), { status: 201 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
