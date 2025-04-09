const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Fungsi Register User
const registerUser = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "Email sudah terdaftar" });
        }

        // Hash password sebelum menyimpan ke database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ success: true, message: "Registrasi berhasil!" });
    } catch (error) {
        console.error("Error saat registrasi:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Fungsi Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cek apakah email terdaftar
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, error: "Email atau password salah" });
        }

        // Bandingkan password yang diinput dengan yang di-hash di database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Email atau password salah" });
        }

        res.json({ success: true, message: "Login berhasil", user });
    } catch (error) {
        console.error("Error saat login:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Ekspor registerUser dan loginUser
module.exports = { registerUser, loginUser };
