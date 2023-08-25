"use client";
import { Button } from "@mui/base/Button";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function SignInButton() {
  return (
    <Link href={"/auth/signin"}>
    <Button
      className=" w-24
      cursor-pointer disabled:cursor-not-allowed text-sm bg-black text-white rounded-md font-semibold px-4 py-2 border-none disabled:opacity-50"
      // onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
      >
      <p>Sign In</p>
    </Button>
    </Link>
  );
}
