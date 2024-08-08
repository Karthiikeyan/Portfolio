import connectToDB from "@/database";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { id } = await req.json(); 

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "No ID provided",
      });
    }

    const result = await Contact.findByIdAndDelete(id);

    if (result) {
      return NextResponse.json({
        success: true,
        message: "Contact deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Contact not found",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}
