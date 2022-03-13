import express, { json } from 'express';
import helmet from 'helmet';
import serverlessHttp from 'serverless-http';

const app = express();
app.use(json());
app.use(helmet());


import {authRouter} from "./Routes/Auth";
import {receiveRouter} from "./Routes/Recive";
import {sendRouter} from "./Routes/Send";
import {resetRouter} from "./Routes/Reset";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/recive", receiveRouter);
app.use("/send", sendRouter);
app.use("/reset", resetRouter);

// define a route handler for the default home page
app.get( "/", (_req, res ) => {
  res.send( "healthy" );
});

app.post("/post",  (req, res) => {
  res.send(req.body);
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);
