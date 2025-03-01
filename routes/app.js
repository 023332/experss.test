import express from "express";
import morgan from "morgan";

import routes from "/routes/index.js"

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express('dev'))

app.use(routes);

app.listen(3000, 'localhost', ()=>{
    console.log("App listening on port 3000");
})

console.log(1111);