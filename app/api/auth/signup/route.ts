import connectDB from "@/lib/db";
import User from "@/lib/userSchema";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { username, email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return NextResponse.json(
        { message: "Error hashing password" },
        { status: 500 }
      );
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return NextResponse.json(
        { message: "Error creating user" },
        { status: 500 }
      );
    }
    await newUser.save();

    const user = newUser.toObject();
    delete user.password;

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during signup:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
