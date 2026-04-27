import express from "express"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js";

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev")) //It's logger which tracks all requests hitting to our server,
// like the method of req, api endpoint on which the req hit, res time, status code


app.use("/api/auth", authRouter);

export default app