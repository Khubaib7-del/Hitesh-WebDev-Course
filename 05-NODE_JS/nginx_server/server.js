const http=require('http');
const fs=require('fs');
const path=require('path'); 

const port=3000

const server=http.createServer((req,res)=>{
    const filePath=path.join(__dirname,req.url==='/'?'index.html':req.url)
    const extname=String(path.extname(filePath)).toLowerCase()

    const mimetypes={
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'text/png',
    }


    const contentType=mimetypes[extname] || 'application/octet-stream'

    fs.readFile(filePath,(err,data)=>{
        if(err){
            if(err== 'ENOENT'){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end('File not found')
            }
        }else{
            res.writeHead(200,{'Content-Type': contentType})
            res.end(data,'utf-8')
        }
    })
})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})



