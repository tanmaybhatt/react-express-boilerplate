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

import React from 'react';
import ReactDOM from 'react-dom/server';
import RootContainer from './src/containers/RootContainer.jsx';

const componentHTML = ReactDOM.renderToString(
    <RootContainer />
);

const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hello React</title>
            <link rel="stylesheet" href="./css/style.css"/>
        </head>
        <body>
            <div id="content">${componentHTML}</div>
        </body>
        <script src="./js/bundle.js"></script>
    </html>
`;

app.get("/",(req,res)=>{
   res.end(html);
})
console.log("Server running at localhost:8080");
app.listen(8080);
