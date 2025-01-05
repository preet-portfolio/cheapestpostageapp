import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { recipient, packageDetails, dimensions } = body;

  const apiKey = process.env.CHITCHATS_API_KEY; // Replace with your actual key

  const shipmentData = {
    to_name: recipient.name,
    to_address1: recipient.address,
    to_city: recipient.city,
    to_state: recipient.state,
    to_postal_code: recipient.postalCode,
    to_country: recipient.country,
    package_contents: packageDetails.contents,
    package_type: packageDetails.type,
    package_weight: dimensions.weight,
    package_length: dimensions.length,
    package_width: dimensions.width,
    package_height: dimensions.height,
    total_value: packageDetails.value,
  };

  try {
    const response = await fetch("https://chitchats.com/api/v1/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(shipmentData),
    });

    if (!response.ok) {
      throw new Error("Failed to create shipment");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating shipment:", error);
    return NextResponse.json(
      { error: "Failed to create shipment" },
      { status: 500 }
    );
  }
}