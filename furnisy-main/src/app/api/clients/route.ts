import { NextResponse } from "next/server";
import { clientData } from "@/db/clientData";

export async function GET() {
  try {
    return NextResponse.json(clientData);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch partners",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
