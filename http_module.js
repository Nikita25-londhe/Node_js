//404 Not Found
//200 ok
//500 Server Error
const http=require('http');
const fs=require('fs');
const port=process.env.port || 3000;
const server=http.createServer((req,res)=>
{       
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(req.url=='/')
    {
       const data=fs.readFileSync('index.html');
       res.end(data.toString());
    }
    else if(req.url=='/about')
    {
        res.end(`<h1>Hello Node Js</h1><p>Learning Node js for Projects</p>`);
    }
    else if(req.url=='/Nikita')
    {
        res.end(`<h1>Page Created By Nikita<h1>`)
    }
    else
    {
        res.statusCode=404;
        res.end(`<h1>Page Not Found</h1><p>This page is not available from server</p>`)
    }
    
})
server.listen(port,()=>
{
    console.log(`Listening on port ${port}`)
})