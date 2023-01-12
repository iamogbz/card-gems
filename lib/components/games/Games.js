import { html } from '../../deps/html.js'
import { GameTile } from './GameTile.js'

export function Games(props) {
  const gameTiles = Object.values(props.games ?? {}).map(
    (g) => html`<${GameTile} key=${g.title} details=${g} />`
  )

  return html`<div id="games">${gameTiles}</div>`
}
