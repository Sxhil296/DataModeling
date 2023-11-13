import express from "express";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.get("/api/data", (req, res) => {
  res.send("hello world!")
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example listening at http://localhost${port}`);
});
