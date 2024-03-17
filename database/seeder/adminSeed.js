import dotenv from "dotenv";
import adminModel from "../models/adminModel.js";
import { connectDb } from "../connectDb.js";
import bcrypt from "bcrypt";
// setup
dotenv.config();

const salt = bcrypt.genSaltSync(10);

// admin data
const key = "myokoko";
const hashkey = bcrypt.hashSync(key, salt);
const data = { key: hashkey };

// create admin seed
const adminSeeder = async () => {
  try {
    await adminModel.deleteMany();
    const adminSeed = await adminModel.create(data);
    console.log({ message: "admin seeder created", adminSeed: adminSeed });
  } catch (error) {
    console.log(error.message);
  }
};

connectDb().then(() => adminSeeder());
