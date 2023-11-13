import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.get("/api/test", (req, res) => {
  res.send("Data Modelling of e-commerce website");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
