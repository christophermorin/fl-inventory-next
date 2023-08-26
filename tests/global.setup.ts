import { test as setup } from "@playwright/test";
import seedTestDb from "./utils/seedTestDb";
import dotenv from "dotenv";

dotenv.config();

setup("Seed Db", async () => {
  await seedTestDb();
});
