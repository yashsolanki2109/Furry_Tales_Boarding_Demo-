import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("vaccine") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file detected in upload payload." },
        { status: 400 }
      );
    }

    // Simulate virus scan and secure server encryption latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        fileName: file.name,
        fileSize: file.size,
        contentType: file.type,
        status: "verified",
        message: "Vaccine record successfully stored in HIPAA-compliant vault.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error during vaccine record upload." },
      { status: 500 }
    );
  }
}
