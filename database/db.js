import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const atlasConnectionString = process.env.MONGODB_URI;

if (!atlasConnectionString) {
  console.error('MONGODB_URI environment variable is not set');
  process.exit(1);
}

try {
  await mongoose.connect(atlasConnectionString);
} catch (error) {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1);
}

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
