import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignOutButton from "@/components/Buttons/SignOutButton";

export const metadata: Metadata = {
  title: "Frontline - Dashboard",
  description: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const userOrganization = session?.user?.organization

  return (
    <div className="h-full">
       <div className="h-full grid grid-cols-1 fixed w-40 border shadow-md shadow-slate-300">
        <ul className="p-4 font-bold flex flex-col gap-4">
          <li>Dashboard Main</li>
          <li>Locations</li>
          <li>Inventories</li>
          <li>History</li>
          <li>Personel</li>
          <li>Alerts</li>
        </ul>
        <ul className="self-end font-bold p-4">
          <li>Settings</li>
          <li><SignOutButton/></li>
        </ul>
      </div>
      {children}
    </div>
  );
}
