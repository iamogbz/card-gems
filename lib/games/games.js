import { load as tcwgyd } from './tcwgyd/load.js'

export async function load() {
  return {
    tcwgyd: await tcwgyd(),
  }
}
