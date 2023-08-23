import { query } from "@/db";
import { buildNewOrganizationQuery, isOrgUniueQuery } from "@/db/models/organization_setup";

export async function isUnique (org_name: string): Promise<boolean> {
    const result = await query(isOrgUniueQuery(org_name))
    const {exists}: { exists: boolean } = result.rows[0]
    if(exists === true){
      throw new Error("Organization name must be unique");
    }
    return exists;
  } 


export async function buildNewOrganization(org_name: string, userId: string): Promise<void> {
  try {
    await query(buildNewOrganizationQuery(org_name, userId))
    return;
  } catch (error) {
    throw new Error("Failed to create organization")
  }
}