import { query } from "@/db";
import { getOrganizationInventoryQuery } from "@/db/models/inventories";

export async function getOrganizationInventory(orgId: number) {
  try {
    const res = await query(getOrganizationInventoryQuery(orgId));
    const inventory = res.rows;
    return inventory;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get org inventory");
  }
}
