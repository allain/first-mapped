module.exports = firstMapped

function firstMapped (target, iter) {
  if (Array.isArray(target)) {
    for (var i = 0, n = target.length; i < n; i++) {
      var mapped = iter(target[i], i, target)
      if (mapped) return mapped
    }
  } else {
    var keys = Object.keys(target)
    for (var i = 0, n = keys.length; i < n; i++) {
      var mapped = iter(target[keys[i]], keys[i], target)
      if (mapped) return mapped
    }
  }
}
