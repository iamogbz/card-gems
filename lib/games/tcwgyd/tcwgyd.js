import { parse } from './parse.js'

export const tcwgyd = {
  title: undefined,
  players: {
    max: undefined,
    min: undefined,
  },
  rounds: [],
}

// Load and parse game details
fetch(new URL('./TCWGYD.md', import.meta.url).pathname)
  .then((r) => r.text())
  .then((t) => Object.assign(tcwgyd, parse(t)))
