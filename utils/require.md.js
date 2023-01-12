const { readModuleFileSync } = require('./readModuleFile')

require.extensions['.md'] = function (module, filename) {
  module.exports = readModuleFileSync(filename, require)
}
