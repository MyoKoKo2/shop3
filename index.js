import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adminRoute from "./routes/admin.js";
import { connectDb } from "./database/connectDb.js";
// setup
dotenv.config();

const PORT = process.env.PORT;

// create server app
const app = express();

// api setup
app.use(cors());
app.use(express.json());

// =======
// route
// =======
// admin
app.use("/admin", adminRoute);

// run server
connectDb().then(() => {
  app.listen(PORT, () =>
    console.log(`server is running on http://localhsot:${PORT}`)
  );
});
