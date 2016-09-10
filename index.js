module.exports = firstMapped

function firstMapped (arr, iter) {
  for (var i = 0, n = arr.length; i < n; i++) {
    var mapped = iter(arr[i], i, arr)
    if (mapped) return mapped
  }
}
