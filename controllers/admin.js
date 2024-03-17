import adminModel from "../database/models/adminModel.js";
import shopModel from "../database/models/shopModel.js";
import bcrypt from "bcrypt";

// login
export const Login = async (req, res) => {
  try {
    const key = req.body.key;

    const { key: keyHash } = await adminModel.findOne();

    const checkKey = bcrypt.compareSync(key, keyHash);

    if (!checkKey) {
      return res.status(404).json({ message: "key not found ? " });
    }

    res.json({ message: "Admin Login Success", keyHash });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create shop
export const createShop = async (req, res) => {
  const token = req.headers.authtoken;

  const { key } = await adminModel.findOne();

  if (token === key) {
    try {
      const shop = await shopModel.create(req.body);
      res.json({ message: "Shop Create Success", shop });
    } catch (error) {
      res.status(500).json({ message: "please try again" });
    }
  } else {
    res.status(500).json({ message: "please try again" });
  }
};

// get shop
export const getShop = async (req, res) => {
  try {
    const shops = await shopModel.find().sort({ createdAt: -1 });

    res.json({ shopCount: shops.length, shops });
  } catch (error) {
    res.status(500).json({ message: "Can not get shops" });
  }
};

// delete shop
export const deleteShop = async (req, res) => {
  try {
    await shopModel.findByIdAndDelete(req.params.id);
    res.json({ message: "shop delete success" });
  } catch (error) {
    res.status(500).json({ message: "Can not delete shops" });
  }
};
