import { Pool, QueryResult } from "pg";
import type { QueryConfig } from "@/types/main";

const config = {
  user: process.env.TEST_DATABASE_USER!,
  host: process.env.TEST_DATABASE_HOST!,
  database: process.env.TEST_DATABASE_NAME!,
  password: process.env.TEST_DATABASE_PASSWORD!,
  port: Number(process.env.TEST_DATABASE_PORT)!,
  // ssl: true,
  max: 20, // set pool max size to 20
  idleTimeoutMillis: 5000, // close idle clients after 1 second
  connectionTimeoutMillis: 5000, // return an error after 1 second if connection could not be established
  maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
}

export const pool = new Pool(config);

// Instead of this, which opens and closes a db connection on every query
// I think I can have the pool connent external to the serveless func I'm calling, and the client release inside func once the query is returned?
// Is that any different than what I'm doing now?

export const query = async (config: QueryConfig): Promise<QueryResult> => {
  const client = await pool.connect()
  try {
    const result = await client.query(config);
    return result;
  } finally {
    client.release();
  }
};