import { html } from '../../deps/html.js'
import { GameTile } from './GameTile.js'

export function Games(props) {
  const gameTiles = Object.entries(props.games ?? {}).map(
    ([k, v]) => html`<${GameTile} key=${k} id=${k} details=${v} />`
  )

  return html`<div id="games">${gameTiles}</div>`
}
