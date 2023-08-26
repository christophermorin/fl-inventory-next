export default function InventoryTableRow({bg}: {bg: number}) {
  const bgColor = bg % 2 ? "" : "bg-slate-200"

  return (
    <div className={`p-2 mt-1 grid grid-cols-9 ${bgColor} shadow-sm shadow-slate-300 text-center}`}>
      <div className="col-span-1">Med pack</div>
      <div className="col-span-2">Health and Medical</div>
      <div className="col-span-1">Equipment</div>
      <div className="col-span-1">10</div>
      <div className="col-span-1">15</div>
      <div className="col-span-1">25/40</div>
      <div className="col-span-1">Base</div>
      <div className="col-span-1">Up</div>
    </div>
  );
}
