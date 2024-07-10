import connectDB from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { ipAddress, pageUrl } = await req.json();

    // Validate if required fields are present
    if (!ipAddress || !pageUrl) {
      throw new Error("IP address or page URL is missing.");
    }

    // Connect to MongoDB
    await connectDB();

    // Create a new User document using Mongoose model
    const newUser = await User.create({
      ipAddress,
      pageUrl,
    });

    // Return success response
    return NextResponse.json({
      msg: ["User consent recorded successfully"],
      success: true,
    });
  } catch (error) {
    console.error("Error recording consent:", error);
    return NextResponse.json({ msg: ["Unable to record user consent."], error: error.message });
  }
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    return POST(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
