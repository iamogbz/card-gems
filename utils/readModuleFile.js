function readModuleFileSync(path, rq = require) {
  return rq('fs').readFileSync(rq.resolve(path), 'utf8')
}

module.exports = { readModuleFileSync }
