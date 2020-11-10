import express from "express";
import APIRouter from "./APIRouter";
import dotenv from "dotenv";

dotenv.config();

const app: express.Application = express();
var port: any = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", APIRouter);
app.use("/test", express.static("public"));
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
