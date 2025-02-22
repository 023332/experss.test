import express, {urlencoded} from "express";
import  morgan from "morgan";
import router from "./routes/index.js";

// const app = express();

// app.get("/karen", (req, res) => {
//     res.send("Hello world");
// })


// app.listen(3000, 'localhost', () =>{
//     console.log("Listen on 3000");
// });


const app = express();
var urlencodedParser = express.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
})
app.use(express.json());


app.use(morgan("dev"));

// const handler1 = (req, res, next) => {
//     console.log("Handler 1");
//     req.customData = 'This is a custom data from handler 1';
//     next();
// };

// const handler2 = (req, res) => {
//     console.log("Handler 2");
//     res.send(`Handler 2 received: ${req.customData}`);
// };

// const handler3 = (req, res) => {

//     res.send(`Handler 3 received`);
// };

// app.post("/user/:id/:type", (req, res) => {
//    console.log(req.params);
//    console.log(req.query);
//     res.send(`User id:`);
// });

app.use( router);

const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}
app.use(logger)

app.get('/karen', (req, res) => {
    console.log(req.body)
    res.send('Hello World!');
})
    // .route('/comments')
    // .get( (req, res) => {
    //     res.send("Comments GET");
    // })
    // .post( (req, res) => {
    //     res.send("Comments POST");
    // });
// app.post("/data", (req, res) => {
//     res.send('Hello World!');
// });
// app.post("/data", handler1, handler2);

app.listen(3000, 'localhost', () => {
    console.log("Listen on 3000");
});
