import { test as setup } from "@playwright/test";
import clearTestDb from "./utils/clearTestDb";
import dotenv from "dotenv";

dotenv.config();

setup("Clear Db", async () => {
  await clearTestDb();
});
