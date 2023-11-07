import { load as tcwgyd } from './tcwgyd/load.js'
import { load as wanrs } from './wanrs/load.js'

export async function load() {
  return {
    tcwgyd: await tcwgyd(),
    wanrs: await wanrs(),
  }
}
