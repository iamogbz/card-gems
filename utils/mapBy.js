function mapBy(iter = [], key = (s) => JSON.stringify(s)) {
  const mapped = {}
  for (const item of iter) {
    mapped[key(item)] = item
  }
  return mapped
}

module.exports = { mapBy }
