import express from "express";
import morgan from "morgan";
import pymentRoutes from "./routes/pyment.routes.js";
import {PORT} from './config.js'
import  path  from "path";

const app = express();
app.use(morgan('dev'))


app.use(pymentRoutes);
app.use(express.static(path.resolve('src/public')))

app.listen(PORT);


console.log('servidor on Port', PORT);