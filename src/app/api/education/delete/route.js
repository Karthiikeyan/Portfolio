import connectToDB from "@/database";
import Education from "@/models/Education";
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

    const result = await Education.findByIdAndDelete(id);

    if (result) {
      return NextResponse.json({
        success: true,
        message: "Education deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Education not found",
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
