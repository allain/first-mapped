const test = require('tape')
const firstMapped = require('..')

test('returns first mapped value', t => {
  let testArr = [1, 2, 3]
  let result = firstMapped(testArr, (val, index, arr) => {
    switch (index) {
      case 0:
        t.equal(val, 1)
        t.equal(arr, testArr)
        return 0
        break
      case 1:
        t.equal(val, 2)
        t.equal(arr, testArr)
        return null
        break
      case 2:
        t.equal(val, 3)
        t.equal(arr, testArr)
        return 'HELLO'
        break
    }
  })

  t.equal(result, 'HELLO')
  t.end()
})

test('returns undefined if no truthy match', t => {
  let result = firstMapped([1, 2, 3 ], () => false)

  t.equals(result, undefined)
  t.end()
})
