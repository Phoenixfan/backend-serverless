import mongoose from "mongoose";

export function call() {
    mongoose.connect('mongodb+srv://###:###@###.###.mongodb.net/', {dbName: "###"});
}