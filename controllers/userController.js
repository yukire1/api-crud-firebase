// controllers/userController.js
const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const docRef = await User.create({ name, email });
    res.status(201).json({ id: docRef.id, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const doc = await User.getById(req.params.id);
    if (!doc.exists) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.update(req.params.id, req.body);
    res.status(200).json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    await User.remove(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


