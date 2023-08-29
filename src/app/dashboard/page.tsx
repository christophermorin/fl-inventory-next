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
          <InventoryTable organizationId={userOrganization}/>
        </section>
        {/* Requests Box */}
        <section className="md:row-span-4 md:col-span-1 shadow-md shadow-slate-300">
          <div className="p-2 flex rounded-t-md">
            <p className="font-bold">Events</p>
          </div>
        </section>
        {/* History Box */}
        <section className="md:row-span-2 md:col-span-3 shadow-md  shadow-slate-900">
           <div className="p-2 flex rounded-t-md">
            <p className="font-bold">History</p>
          </div>
          <HistoryTable />
        </section>
        {/* Alters Box */}
        <section className="md:row-span-2 md:col-span-2 shadow-md shadow-slate-900">
          <div className="p-2 flex justify-center gap-4 rounded-t-md">
            <p className="font-bold">Alerts</p>
            <p className="font-bold">Financials</p>
          </div>
        </section>
      </DashboardContainer>
    </div>
  );
}
