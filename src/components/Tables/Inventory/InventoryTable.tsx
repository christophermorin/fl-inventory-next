import InventoryTableHead from "./InventoryTableHead";
import InventoryTableRow from "./InventoryTableRow";

export default function InventoryTable() {
  return (
    <div  className="w-full" aria-label="Invetory table">
      <InventoryTableHead />
        {/* Extract */}
        <InventoryTableRow bg={1}/>
        <InventoryTableRow bg={2}/>
        {/* </div> */}
    </div>
  );
}
