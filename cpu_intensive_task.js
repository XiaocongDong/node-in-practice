const sum = n => {
  let result = 0
  for(let i = 0; i < n; i++) {
    result += i
  }
  return result
}

module.exports.sum = sum
