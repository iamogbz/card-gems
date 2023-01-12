const { readModuleFileSync } = require('../../utils/readModuleFile')
const { parse } = require('./parse')

const TCWGYD = {
  title: undefined,
  players: {
    max: undefined,
    min: undefined,
  },
  rounds: [],
}

module.exports = {
  TCWGYD,
}

// Load and parse game details
;(() => {
  const gameMd = readModuleFileSync('./TCWGYD.md', require)
  Object.assign(TCWGYD, parse(gameMd))
})()
