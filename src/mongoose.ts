import mongoose from "mongoose";

export function call() {
    //mongoose.connect('mongodb+srv://###:###@###.###.mongodb.net/', {dbName: "###"});
    mongoose.connect('mongodb+srv://me:Go9dyAtUHr0m400X@chat-backend.cy6ld.mongodb.net/?retryWrites=true&w=majority', {dbName: "chat"});
}