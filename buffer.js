const size = 26
const buffer = Buffer.alloc(size)
const start = 97
for (let i = 0; i < size; i++) {
  buffer.writeInt8(start + i, i)
}
console.log(buffer.toString('utf-8'))
