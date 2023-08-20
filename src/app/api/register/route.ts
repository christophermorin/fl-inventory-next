import { query } from "@/db";
import { registerUser } from "@/db/models/users";
import { toNewRegistrationEntry } from "@/utils/toNewRegisterEntry";
import { hashSync } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  try {
    const userInput = await req.json()
    const validEntry = toNewRegistrationEntry(userInput)
    
    const saltRounds = 10;
    const hashedPassword = hashSync(validEntry.password, saltRounds)
  
    await query(registerUser({
      password: hashedPassword,
      name: validEntry.name,
      email: validEntry.email,
    }))
    return NextResponse.json({
      user: {
        name: validEntry.name,
        email: validEntry.email,
      }
    })
  } catch (error: any) {
     return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
