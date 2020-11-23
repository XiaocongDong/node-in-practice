const { sum } = require("./cpu_intensive_task")

process.on('message', (msg) => {
  process.send({value: sum(msg.num)})
})
