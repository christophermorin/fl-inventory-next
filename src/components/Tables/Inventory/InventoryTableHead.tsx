export default function InventoryTableHead() {
  return (
    <div>
      <div className="p-4 grid grid-cols-8 bg-slate-900 text-white">
        <div className="col-span-1">Item</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-1">Type</div>
        <div className="col-span-1">Available</div>
        <div className="col-span-1">Deployed</div>
        <div className="col-span-1">Stock</div>
        <div className="col-span-1">Locations</div>
        <div className="col-span-1">Status</div>
      </div>
    </div>
  );
}
