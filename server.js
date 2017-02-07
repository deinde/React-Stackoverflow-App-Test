const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
//bundle.js
app.use(express.static(__dirname));
//any route other return index.html
app.get('*',(req,res)=>{
 res.sendFile(path.resolve(__dirname,'index.html'))
});
app.listen(port);

console.log('The server is started on port:',port);