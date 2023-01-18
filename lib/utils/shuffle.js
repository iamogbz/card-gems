export function shuffle(elems) {
  return [...elems].sort(() => 0.5 - Math.random())
}
