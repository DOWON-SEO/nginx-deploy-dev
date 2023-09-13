import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.get("/", (req: Request, res: Response) => {
    res.send(`CONNECTED TO SERVER RUNNING ON PORT ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
