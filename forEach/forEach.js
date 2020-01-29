const suite = require('chuhai')

suite('B.forEach implementations', s => {
  const testArray = [1, 2, 3, 4, 5]
  const job = x => x

  s.bench('for', () => {
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      job(testArray[i])
    }

    return testArray
  })

  s.bench('while', () => {
    let counter = 0

    while (counter < testArray.length) {
      job(testArray[counter])

      counter++
    }

    return testArray
  })

  s.bench('for in', () => {
    for (const i in testArray) {
      if (typeof i === 'number') {
        job(testArray[i])
      }
    }

    return testArray
  })

  s.bench('for of', () => {
    for (const val of testArray) {
      job(val)
    }

    return testArray
  })

  s.bench('Array.prototype.forEach', () => {
    testArray.forEach(job)

    return testArray
  })
})
