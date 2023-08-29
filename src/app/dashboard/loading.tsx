import DashboardContainer from "@/components/Containers/DashboardContainer";

export default async function DashboardLoading() {
  return (
    <div className="h-full">
      <DashboardContainer>
        <section className="md:row-span-4 md:col-span-4 shadow-md shadow-slate-900">
          <div className="p-4 flex gap-4 rounded-t-md"></div>
        </section>
        <section className="md:row-span-4 md:col-span-1 shadow-md shadow-slate-300"></section>
        <section className="md:row-span-2 md:col-span-3 shadow-md  shadow-slate-900">
          <div className="p-2 flex rounded-t-md"></div>
        </section>
        <section className="md:row-span-2 md:col-span-2 border shadow-md shadow-slate-300"></section>
      </DashboardContainer>
    </div>
  );
}
