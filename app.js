//include http module
const http=require("http");
//create server
const server=http.createServer((req,res)=>{
        console.log("server created");
        res.setHeader('Content-Type','text/html');
        if(req.url==='/')
        {
                res.statusCode=200;  //ok
                res.end("<h1>Home page</h1>");
        }
        else{
            if(req.url==='/pizza')
            {
                
                res.statusCode=200;  //ok
                res.end("<h1>This is your pizza</h1>");
            }
            else
            {
                
                res.statusCode=404;  //not found
                res.end("<h1>Page not found!</h1>");
            }
        }
});

const port =3000;
server.listen(port,()=>{
     console.log("server running");
});