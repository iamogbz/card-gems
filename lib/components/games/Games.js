import { html } from '../../deps/html.js'
import { useStyles } from '../hooks/useStyles.js'
import { GameTile } from './GameTile.js'

export function Games(props) {
  const gameTiles = Object.entries(props.games ?? {}).map(
    ([k, v]) => html`<${GameTile} key=${k} id=${k} details=${v} />`
  )

  const cssStyle = useStyles({
    selector: '#games',
    styles: {
      default: {
        display: 'flex',
        gap: '10px',
      },
    },
  })

  return html`<div id="games">${gameTiles}${cssStyle}</div>`
}
