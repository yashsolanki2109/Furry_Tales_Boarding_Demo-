import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ownerName, email, phone, petName, petBreed, petWeight, serviceType, checkIn } = body;

    // Server-side validation simulation
    if (!ownerName || !email || !phone || !petName || !petBreed || !petWeight || !serviceType || !checkIn) {
      return NextResponse.json(
        { success: false, error: "Missing required fields in booking submission." },
        { status: 400 }
      );
    }

    // Simulate database write / calendar syncing latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate a royal confirmation code
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `FT-${randomCode}`;

    return NextResponse.json(
      {
        success: true,
        bookingId,
        message: "Synchronized with Gingr calendar backend successfully.",
        confirmedAt: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error during booking validation." },
      { status: 500 }
    );
  }
}
