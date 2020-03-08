const suite = require('chuhai')

suite('B.forEach implementations', s => {
  const testArray = [1, 2, 3, 4, 5]
  const cb = x => (x % 2) === 1

  s.bench('for', () => {
    const result = []

    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      if (cb(testArray[i])) {
        result.push(testArray[i])
      }
    }

    return result
  })

  s.bench('while', () => {
    const result = []
    let counter = 0

    while (counter < testArray.length) {
      if(cb(testArray[counter])) {
        result.push(testArray[counter])
      }

      counter++
    }

    return result
  })

  s.bench('for in', () => {
    const result = []

    for (const i in testArray) {
      if (typeof i === 'number') {
        if(cb(testArray[i])) {
          result.push(testArray[i])
        }
      }
    }

    return result
  })

  s.bench('for of', () => {
    const result = []

    for (const val of testArray) {
      if (cb(val)) {
        result.push(val)
      }
    }

    return result
  })

  s.bench('Array.prototype.filter', () => {
    return testArray.filter(cb)
  })
})
