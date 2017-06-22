import Express from 'express';
import Webpack from 'webpack';
import devConfig from './webpack.config';
import prodConfig from './webpack.prod';
import path from 'path';
const compiler = Webpack(devConfig);

var app = Express();

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true
}));

app.use(Express.static("dist"));

app.use(require("webpack-hot-middleware")(compiler,{reload:true}));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/dist/index.html"));
})
console.log("Server running at localhost:8080");
app.listen(8080);
