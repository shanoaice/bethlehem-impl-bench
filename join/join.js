const suite = require('chuhai')

suite('B.join implementations', s => {
  const testArray = [1, 2, 3, 4, 5]
  const seperator = '-'

  s.bench('for', () => {
    let result = ''

    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      result += `${testArray[i]}${seperator}`
    }

    return result.slice(0, -1)
  })

  s.bench('while', () => {
    let counter = 0
    let result = ''

    while (counter < testArray.length) {
      result += `${testArray[counter]}${seperator}`

      counter++
    }

    return result.slice(0, -1)
  })

  s.bench('for in', () => {
    let result = ''

    for (const i in testArray) {
      if (typeof i === 'number') {
        result += `${testArray[i]}${seperator}`
      }
    }

    return result.slice(0, -1)
  })

  s.bench('for of', () => {
    let result = ''

    for (const val of testArray) {
      result += `${val}${seperator}`
    }

    return result.slice(0, -1)
  })

  s.bench('Array.prototype.join', () => {
    return testArray.join(seperator)
  })
})
