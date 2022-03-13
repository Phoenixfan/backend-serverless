import express from "express";
import MessageModel from "../Modules/Message";
import UserModel from "../Modules/User";

export const resetRouter = express.Router();

resetRouter.get("/all", (_req, res) => {
    UserModel.find({}).remove();
    MessageModel.find({}).remove();
    res.send("done");
});

