import express from "express";
import cors from "cors";
import helmet from "helmet";
// import carrierRouter from "./Carriers/carrier.routes.js";
import { connectToDB } from "./config/db.config.js";
connectToDB();

const port = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use('api/v1');
// app.use("/api/v1/carriers", carrierRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
