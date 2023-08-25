"use client"
import { Button } from "@mui/base/Button";
import { signOut } from "next-auth/react";
export default function SignOutButton() {
  return (
      <Button
        className="w-24
      cursor-pointer disabled:cursor-not-allowed text-sm bg-black text-white rounded-md font-semibold px-4 py-2 border-none disabled:opacity-50"
        onClick={() => signOut()}
      >
        <p>Sign Out</p>
      </Button>
  );
}
