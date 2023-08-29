export default function HistoryTableHead() {
  return (
    <div>
      <div className="p-4 grid grid-cols-6 bg-slate-900 text-gray-200">
        <div className="col-span-1">Type</div>
        <div className="col-span-2">Manifest</div>
        <div className="col-span-1">Origin</div>
        <div className="col-span-1">Destination</div>
        <div className="col-span-1">Status</div>
      </div>
    </div>
  );
}
