const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const carrierRouter require("./Carriers/)carrier.routes.js";
const { connectToDB } = require("./config/maindb.config.js");
connectToDB();

const port = process.env.PORT;

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use('api/v1');
// app.use("/api/v1/carriers", carrierRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
