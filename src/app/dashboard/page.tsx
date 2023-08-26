import DashboardContainer from "@/components/Containers/DashboardContainer";
import { userHasOrganization } from "../api/dashboard/userHasOrganization";
import { redirect } from "next/navigation";
import InventoryTable from "@/components/Tables/Inventory/InventoryTable";
import HistoryTable from "@/components/Tables/History/HistoryTable";

export default async function Dashboard() {
  const userOrganization = await userHasOrganization();
  if (userOrganization === null) {
    redirect("/organization_setup");
  }
  return (
    <div className="h-full">
      {/* Extract */}
      <DashboardContainer>
        {/* Inventory Box */}
        <section className="md:row-span-4 md:col-span-4 shadow-md shadow-slate-900">
          <div className="p-4 flex gap-4 rounded-t-md">
            <p className="font-bold">Inventory:</p>
            <p>@ Org Wide</p>
          </div>
          <InventoryTable />
        </section>
        {/* Requests Box */}
        <section className="md:row-span-4 md:col-span-1 shadow-md shadow-slate-300"></section>
        {/* History Box */}
        <section className="md:row-span-2 md:col-span-3 shadow-md  shadow-slate-900">
           <div className="p-2 flex rounded-t-md">
            <p className="font-bold">History</p>
          </div>
          <HistoryTable />
        </section>
        {/* Alters Box */}
        <section className="md:row-span-2 md:col-span-2 border shadow-md shadow-slate-300"></section>
      </DashboardContainer>
    </div>
  );
}
