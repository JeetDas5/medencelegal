//post an issue

import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Issue from "@/lib/issueSchema";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const { name, email, phone, issue } = await request.json();
    if (!name || !email || !phone || !issue) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const newIssue = new Issue({ name, email, phone, issue });
    await newIssue.save();
    return NextResponse.json(
      { message: "Issue submitted successfully", issue: newIssue },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting issue:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Error submitting issue", error: error.message },
        { status: 500 }
      );
    }
  }
}

//get all issues

export async function GET() {
  await connectDB();
  try {
    const issues = await Issue.find();
    return NextResponse.json({ issues }, { status: 200 });
  } catch (error) {
    console.error("Error fetching issues:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Error fetching issues", error: error.message },
        { status: 500 }
      );
    }
  }
}
