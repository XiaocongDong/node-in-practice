const { workerData, parentPort } = require('worker_threads')
const { sum } = require('./cpu_intensive_task')

parentPort.postMessage('' + sum(workerData))
