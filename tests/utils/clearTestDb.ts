import { QueryConfig } from "@/types/main";
import { query } from "../../src/db/index";

export default async function clearTestDb() {
  await query(clearTestData());
}

const clearTestData = (): QueryConfig => {
  const text = `DELETE FROM users;`;
  const queryConfig: QueryConfig = {
    text: text,
    values: [],
  };

  return queryConfig;
};
