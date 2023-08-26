import { Button } from "@mui/base/Button";
import Link from "next/link";

export default function NavButton({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <Link href={url}>
      <Button
        className=" w-20
      cursor-pointer disabled:cursor-not-allowed text-sm  bg-black text-white rounded-md font-semibold px-4 py-2 border-none disabled:opacity-50"
      >
        {children}
      </Button>
    </Link>
  );
}
