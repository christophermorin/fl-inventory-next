import { updateUserOnCreateOrganizationQuery } from "@/db/models/users";
import { query } from "@/db";

export async function updateUserOnNewOrg(org_name: number, userId: string) {
  try {
    await query(updateUserOnCreateOrganizationQuery(org_name, userId));
  } catch (error) {
    throw new Error("Failed to update user fields");
  }
}
