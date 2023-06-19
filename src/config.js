//dotenv
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "1234";
export const DB_NAME = process.env.DB_NAME || "app_node_railway";
export const DB_PORT = process.env.DB_PORT || 3306;
