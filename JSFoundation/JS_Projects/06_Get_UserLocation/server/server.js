import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());

const staticPath = path.join(__dirname, "../");
console.log("Serving static files from:", staticPath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.get("/weather", async (req, res) => {
  const { lat, long } = req.query;

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${lat},${long}&aqi=yes`,
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
