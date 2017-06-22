import Express from 'express';
import path from 'path';

var app = Express();

app.use(Express.static("dist"));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/dist/index.html"));
})
console.log("Production Server running at localhost:8080");

app.listen(8080);
