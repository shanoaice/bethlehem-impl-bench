const suite = require('chuhai')

suite('B.find implementations', s => {
  const testArray = [1, 2, 0, 4, 5]
  const predicate = x => x === 0

  s.bench('for', () => {
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      if (predicate(testArray[i])) {
        return testArray[i]
      }
    }

    return undefined
  })

  s.bench('while', () => {
    let counter = 0

    while (counter < testArray.length) {
      if (predicate(testArray[counter])) {
        return testArray[counter]
      }

      counter++
    }

    return undefined
  })

  s.bench('for in', () => {
    for (const i in testArray) {
      if (typeof i === 'number') {
        if (predicate(testArray[i])) {
          return testArray[i]
        }
      }
    }

    return true
  })

  s.bench('for of', () => {
    for (const val of testArray) {
      if (predicate(val)) {
        return val
      }
    }

    return undefined
  })

  s.bench('Array.prototype.forEach', () => {
    let result = undefined

    testArray.forEach(val => {
      if (predicate(val)) result = val
    })

    return result
  })

  s.bench('Array.prototype.find', () => {
    return testArray.find(predicate)
  })
})

suite('B.findIndex implementations', s => {
  const testArray = [1, 2, 0, 4, 5]
  const predicate = x => x === 0

  s.bench('for', () => {
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      if (predicate(testArray[i])) {
        return i
      }
    }

    return -1
  })

  s.bench('while', () => {
    let counter = 0

    while (counter < testArray.length) {
      if (predicate(testArray[counter])) {
        return counter
      }

      counter++
    }

    return -1
  })

  s.bench('for in', () => {
    for (const i in testArray) {
      if (typeof i === 'number') {
        if (predicate(testArray[i])) {
          return i
        }
      }
    }

    return -1
  })

  s.bench('for of', () => {
    for (const val of testArray) {
      if (predicate(val)) {
        return testArray.indexOf(val)
      }
    }

    return -1
  })

  s.bench('Array.prototype.forEach', () => {
    let result = -1

    testArray.forEach((val, index) => {
      if (predicate(val)) result = index
    })

    return result
  })

  s.bench('Array.prototype.findIndex', () => {
    return testArray.findIndex(predicate)
  })
})
