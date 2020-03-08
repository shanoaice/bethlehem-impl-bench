const suite = require('chuhai')

suite('B.forEach implementations', s => {
  const testArray = [1, 2, 3, 4, 5]
  const job = x => x

  s.bench('for', () => {
    const result = []

    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      result.push(job(testArray[i]))
    }

    return result
  })

  s.bench('while', () => {
    const result = []
    let counter = 0

    while (counter < testArray.length) {
      result.push(job(testArray[counter]))

      counter++
    }

    return result
  })

  s.bench('for in', () => {
    const result = []

    for (const i in testArray) {
      if (typeof i === 'number') {
        result.push(job(testArray[i]))
      }
    }

    return result
  })

  s.bench('for of', () => {
    const result = []

    for (const val of testArray) {
      result.push(job(val))
    }

    return result
  })

  s.bench('Array.prototype.map', () => {
    return testArray.map(job)
  })
})
