import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";

type ItemProps = {
  order: number;
  item: string;
  type: string;
  category: string;
  total_available: number;
  total_deployed: number;
  total_stock: number;
  locations: Array<string>;
};

export default function InventoryTableRow({
  order,
  item,
  type,
  category,
  total_available,
  total_deployed,
  total_stock,
  locations,
}: ItemProps) {
  const bgColor = order % 2 ? "" : "bg-slate-200";
  const uniqueLocations = Array.from(new Set(locations));
  return (
    <div
      className={`p-2 mt-1 grid grid-cols-8 ${bgColor} shadow-sm text-center}`}
    >
      <div className="col-span-1 capitalize">{item}</div>
      <div className="col-span-2 capitalize">{type}</div>
      <div className="col-span-1 capitalize">{category}</div>
      <div className="col-span-1">{total_available}</div>
      <div className="col-span-1">{total_deployed}</div>
      <div className="col-span-1">{total_stock}</div>
      <div className="col-span-1 capitalize">
        <Select className="border border-red-300 h-full w-full">
          {uniqueLocations.map((location) => {
            return (
              <Option key={location} value={location}>
                {location}
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
}
