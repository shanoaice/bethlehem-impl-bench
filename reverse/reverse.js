const suite = require('chuhai')

suite('B.join implementations', s => {
  const testArray = [1, 2, 3, 4, 5]

  s.bench('for', () => {
    let result = []

    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = testArray.length - 1; i >= 0; i--) {
      result.push(testArray[i])
    }

    return result
  })

  s.bench('while', () => {
    let counter = testArray.length - 1
    let result = []

    while (counter >= 0) {
      result.push(testArray[counter])

      counter--
    }

    return result
  })
})
