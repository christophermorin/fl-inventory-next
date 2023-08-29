export default function HistoryTableRow({bg}: {bg: number}) {
  const bgColor = bg % 2 ? "bg-green-200/40" : "bg-red-200/40"

  return (
    <div className={`p-2 mt-1 grid grid-cols-6 shadow-sm ${bgColor} text-center}`}>
      <div className="col-span-1">Transfer</div>
      <div className="col-span-2">Will be a hover?</div>
      <div className="col-span-1">Base</div>
      <div className="col-span-1">Frontline</div>
      <div className="col-span-1">Enroute</div>
    </div>
  );
}
