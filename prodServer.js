import Express from 'express';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import RootContainer from './src/containers/RootContainer.jsx';

const componentHTML = ReactDOM.renderToString(
    <RootContainer />
);

const html = `
    <html>
        <head>
            <title>Quiz Wall</title>
        </head>
        <body>
            <div id="react-view">${componentHTML}</div>
        </body>
    </html>
`;

var app = Express();

app.use(Express.static("dist"));

app.get("/",(req,res)=>{
    res.end(html);
})
console.log("Production Server running at localhost:8080");

app.listen(8080);
