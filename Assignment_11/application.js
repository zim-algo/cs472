var http = require ('http');
let fs = require('fs');


//creating server
const server = http.createServer (function (req, res) {
    
        fs.readFile('./CS.pdf', (err, data) => {
            if (err) {
                res.writeHead(400, { 'Content-type': 'text/html' })
                console.log(err);
                res.end("No such pdf exists");
            } else {
                res.writeHead(200, { 'Content-type': 'application/pdf' });
                res.end(data);
            }
        })
        
        console.log('A new request received');

        console.log(req);
    });

//start server

server.listen(3000, "127.0.0.1",()=>{
    console.log("Server is started...");
});