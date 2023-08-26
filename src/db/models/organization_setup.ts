import type { QueryConfig } from "@/types/main";

// Check if org already exists in database
export const isOrgUniueQuery = (org_name: string): QueryConfig => {
  const text = `SELECT EXISTS (SELECT 1 FROM organizations WHERE org_name = $1);`;

  const config = {
    text: text,
    values: [org_name],
  };

  return config;
};

// Build new organization
export const buildNewOrganizationQuery = (
  org_name: string,
  userId: string
): QueryConfig => {
  const text = `INSERT INTO organizations (org_name, members) VALUES ($1, ARRAY[$2]::uuid[])`;

  const config = {
    text: text,
    values: [org_name, userId],
  };

  return config;
};
