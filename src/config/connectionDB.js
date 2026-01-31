import mongoose from "mongoose";
import ENVIRONMENT from "./environment.js";

async function connectToDatabase() {
    try {
        await mongoose.connect(ENVIRONMENT.MONGO_DB_CONNECTION_STRING);
        console.log("CONECTADO A MONGO DB!");
    } catch (error) {
        console.error("ERROR CONECTANDO A MONGO DB: ", error);
    }
}

export default connectToDatabase;