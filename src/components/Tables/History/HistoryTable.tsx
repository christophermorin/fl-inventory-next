import HistoryTableHead from "./HistoryTableHead";
import HistoryTableRow from "./HistoryTableRow";
export default function HistoryTable() {
  return (
    <div  className="w-full" aria-label="Invetory table">
      <HistoryTableHead />
      <HistoryTableRow bg={1}/>
      <HistoryTableRow bg={2}/>
    </div>
  );
}
