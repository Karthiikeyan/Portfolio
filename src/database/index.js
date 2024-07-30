import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://Karthikeyan:Mongodb@e-commerce.chyiafn.mongodb.net/Portfolio"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
