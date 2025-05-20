// import { connectToDb } from "/utils/database";
// import marketingTechnician from "@/models/marketingTechnician";

// export const GET = async (req, { params }) => {
//   let { id } = await params;

//   try {
//     await connectToDb();

//     const newTechnician = await marketingTechnician.findOne({ _id: id });

//     if (newTechnician) {
//       return new Response(JSON.stringify(newTechnician), { status: 200 });
//     } else {
//       return new Response("Technician not found", { status: 404 });
//     }
//   } catch (error) {
//     return new Response(error.message, { status: 500 });
//   }
// };

// export const PUT = async (req, { params }) => {
//   try {
//     let { id } = await params;

//     const { technician_name, technician_phone, address, district } =
//       await req.json();

//     const newTechnician = await marketingTechnician.findOne({ _id: id });
//     newTechnician.technician_name = technician_name;
//     newTechnician.technician_phone = technician_phone;
//     newTechnician.district = district;
//     newTechnician.address = address;

//     await newTechnician.save();

//     return new Response("Item Save successfully", { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new Response(error.message, { status: 500 });
//   }
// };

// export async function DELETE(request, { params }) {
//   const { id } = params;

//   try {
//     await connectToDb();
//     const deleteItem = await marketingTechnician.findByIdAndDelete(id);
//     if (!deleteItem) {
//       return NextResponse(error.message, { status: 500 });
//     }
//     return NextResponse.json(
//       { message: "Item deleted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting item:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

import { connectToDb } from "@/utils/database";
import marketingTechnician from "@/models/marketingTechnician";

export const GET = async (req, { params }) => {
  const { id } = params;

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
  const { id } = params;

  try {
    await connectToDb();

    const { technician_name, technician_phone, address, district } =
      await req.json();

    const technician = await marketingTechnician.findById(id);

    if (!technician) {
      return new Response("Technician not found", { status: 404 });
    }

    technician.technician_name = technician_name;
    technician.technician_phone = technician_phone;
    technician.district = district;
    technician.address = address;

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
