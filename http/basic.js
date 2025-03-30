const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("hello world and welcome to home page");
    }
    if(req.urll==='/about'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("welcome to about page");
        }
        else if(req.url==='/contact'){
            res.writeHead(200,{"content-type":"text/plain"});
            res.end("welcome to contact page");
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Page Not Found</h1>');
            }
})

server.listen(3000,()=>{
    console.log("server is running at port 3000");
})