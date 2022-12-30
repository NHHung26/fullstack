import  express  from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRouter(app);

let port = process.env. PORT || 2608;

//PORT = undefined => PORT = 2608

app.listen(port, ()=> {
    console.log("Backend nodejs is running on the port : "+ port )
})