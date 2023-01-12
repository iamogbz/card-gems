import { parse } from './parse.js'

// Load and parse game details
export async function load() {
  const gameMd = await fetch(
    new URL('./TCWGYD.md', import.meta.url).pathname
  ).then((r) => r.text())
  return parse(gameMd)
}
