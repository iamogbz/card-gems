export function replaceAll(s = '', remap = {}) {
  return Object.keys(remap).reduce((p, c) => p.replaceAll(c, remap[c]), s)
}
