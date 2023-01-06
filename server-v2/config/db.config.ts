import mongoose, * as Mongoose from "mongoose";
import {ConnectOptions} from "mongoose";

require('dotenv').config()


export class DB {
    private static connection: Mongoose.Mongoose

    public static async connect(): Promise<void> {
        mongoose.set("strictQuery", false);
        await mongoose
        .connect(process.env.MONGO_CONNECTION_STRING || "http://localhost:8000", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        } as ConnectOptions)
        .then((connection: Mongoose.Mongoose) => {

            DB.connection = connection;
            console.log("Database Connected Successfuly.");
        })
        .catch((err) => {
            console.log("Error Connectiong to the Database");
        });
    }


    public static async disconnect() {
        await DB.connection.disconnect();
    };
}
