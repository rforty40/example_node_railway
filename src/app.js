import express from "express";
import { pool } from "./db.js";
import { PORT, URL_PUBLIC } from "./config.js";

const app = express();

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.json(rows);
});

app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  res.json(result[0]);
});

app.get("/create", async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("John")');
  res.json(result);
});

app.listen(PORT);
console.log("URL PUBLIC --> ", URL_PUBLIC);
console.log("Server on port, Servidor en el puerto", PORT);
