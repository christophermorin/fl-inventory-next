import { QueryConfig } from "@/types/main";
import { query } from "../../src/db/index";
import { hashSync } from "bcrypt";

export default async function seedTestDb() {
  await query(seedOrgSetupUser());
  await query(seedDashBoardUser());
}

const seedOrgSetupUser = (): QueryConfig => {
  const saltRounds = 10;
  const hashedPassword = hashSync("pAssword123!", saltRounds);

  const text = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`;
  const queryConfig: QueryConfig = {
    text: text,
    values: ["orgSetup", "orgSetup@mail.com", hashedPassword],
  };

  return queryConfig;
};

const seedDashBoardUser = (): QueryConfig => {
  const saltRounds = 10;
  const hashedPassword = hashSync("pAssword123!", saltRounds);

  const text = `INSERT INTO users (name, email, password, roles, organization)
    VALUES ($1, $2, $3, ARRAY[$4], $5);`;

  const queryConfig: QueryConfig = {
    text: text,
    values: [
      "dashBoard",
      "dashBoard@mail.com",
      hashedPassword,
      "admin",
      "DashBoard Route Test",
    ],
  };

  return queryConfig;
};
