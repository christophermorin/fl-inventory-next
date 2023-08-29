import { QueryConfig } from "@/types/main";

export const getOrganizationInventoryQuery = (id: number): QueryConfig => {
  const text = `SELECT item, type, category, SUM(available) AS total_available, SUM(deployed) AS total_deployed, SUM(stock) AS total_stock, STRING_AGG(location, ',') AS locations FROM inventories WHERE organization = $1 GROUP BY item, type, category;`;

  const config = {
    text: text,
    values: [id],
  };

  return config;
};
