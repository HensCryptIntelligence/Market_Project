const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Menghapus spasi di awal & akhir
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Email harus unik
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Tambahkan createdAt & updatedAt otomatis
);

module.exports = mongoose.model("User", userSchema);