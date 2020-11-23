const { readFile, createReadStream } = require('fs')
const http = require('http')
const { hostname } = require('os')
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  
  if (req.url === '/stream') {
    // with stream, the content of the file will be read chunk by chunk
    const fileStream = createReadStream('../bigfile.txt')
    fileStream.pipe(res)
  } else {
    // without using stream, the big content of file will crash the memory
    readFile('../bigfile.txt', (err, data) => {
      if (err) {
        console.error(err)
        res.end()
        return
      }
      res.end(data.toString('utf-8'))
    })
  }
})

server.listen(port, hostname, () => {
  console.log(`server running at ${port}`)
})
