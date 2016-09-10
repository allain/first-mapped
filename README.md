# first-mapped

Returns the first truthy mapping of elements in an array.

It's a very small package that implements a pattern I kept seeing.

It's much like `Array.find` except it returns the value computed 
instead of the element that it's computed from

## Installation

```bash
npm install --save first-mapped
```

## Usage

```JavaScript
const firstMapped = require('first-mapped')

let mapped = firstMapped([1, 2, 3], (val, index, arr) => {
  if (val === 3) {
    return 'HERE'
  } else {
    return false
  }
})

console.log(mapped) // HERE 
```