import { Pool, QueryResult } from "pg";
import type { QueryConfig } from "@/types/main";

const config = {
  user: process.env.POSTGRES_USER! || "postgres",
  host: process.env.POSTGRES_HOST!,
  database: process.env.POSTGRES_NAME! || "postgres",
  password: process.env.POSTGRES_PASSWORD!,
  port: Number(process.env.POSTGRES_PORT)! || 5432,
  // ssl: true,
  max: 20, // set pool max size to 20
  idleTimeoutMillis: 5000, // close idle clients after 1 second
  connectionTimeoutMillis: 5000, // return an error after 1 second if connection could not be established
  maxUses: 7500, // close (and replace) a connection after it has been used 7500 times 
};

export const pool = new Pool(config);

export const query = async (config: QueryConfig): Promise<QueryResult> => {
  const client = await pool.connect();
  try {
    const result = await client.query(config);
    return result;
  } finally {
    client.release();
  }
};
