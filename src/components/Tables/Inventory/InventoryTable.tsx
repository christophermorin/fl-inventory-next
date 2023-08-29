import InventoryTableHead from "./InventoryTableHead";
import InventoryTableRow from "./InventoryTableRow";
import { getOrganizationInventory } from "@/services/inventoryServices";

// Has get server side props call to fetch inventory
// GETS: all items with available SUM'D, in use SUM'd, total SUM'd locations(sorted into an array) WHERE org matches users org ID SORTED BY ITEMS

export default async function InventoryTable({organizationId}: {organizationId: number}) {
  const orgInventory = await getOrganizationInventory(organizationId);
  return (
    <div className="w-full" aria-label="Invetory table">
      <InventoryTableHead />
      {orgInventory.map((item, i) => {
        return (
          <InventoryTableRow 
            key={i}
            order={i}
            item={item.item}
            type={item.type}
            category={item.category}
            total_available={item.total_available}
            total_deployed={item.total_deployed}
            total_stock={item.total_stock}
            locations={item.locations.split(",")}
          />
        )
      })}
    </div>
  );
}
