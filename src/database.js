import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

(async () => {
  try {
    const db = await connect(process.env.MONGO_DB);
    console.log("DB connected", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
