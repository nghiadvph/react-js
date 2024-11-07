import express from "express";
// import categoryRouter from "./router/category"
import cors from "cors";
import authRouter from "./router/auth"
import productRouter from "./router/product"
import {connectDb} from "./config/db"
import cardProduct from './router/card'
const app = express();
app.use(express.json());
app.use(cors());
connectDb();

app.get("/", (request, response) => {
    console.log("request");
 });

app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", cardProduct);

export const viteNodeApp = app;