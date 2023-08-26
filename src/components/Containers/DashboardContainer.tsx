export default function DashboardContainer ({children} : {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full grid gap-2 md:ml-40 md:p-4 md:grid-cols-5 md:grid-rows-6">
      {children}
    </div>
  )
}