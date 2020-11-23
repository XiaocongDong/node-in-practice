const { readFile, createReadStream } = require('fs')
const { hostname } = require('os')
const { sum } = require('./cpu_intensive_task')
const { fork } = require('child_process')
const { Worker } = require('worker_threads')
const http = require('http')

const port = 3000

const numToCalculate = 10000000000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  if (req.url === '/thread_sum') {
    const workerThread = new Worker('./sum_worker_thread.js', { workerData: numToCalculate })
    workerThread.on('message', result => res.end(result))
  } else if (req.url === '/sum') {
    res.end('' + sum(numToCalculate))
  } else {
    res.end('hello world')
  }
})

server.listen(port, hostname, () => {
  console.log(`server running at ${port}`)
})
