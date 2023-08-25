import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';

export async function GET(request: Request, organization: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.organization){
    return NextResponse.json({
      data: null,
      organization: null,
    })
  }
  // if no org, return
  // fetch all data based on org
  // return user roles
  return NextResponse.json({

  });
}
