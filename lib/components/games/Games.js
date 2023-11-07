import { html } from '../../deps/html.js'
import { useStyles } from '../hooks/useStyles.js'
import { GameTile } from './GameTile.js'
import { PlayerTokens } from './PlayerTokens.js'

export function Games(props) {
  const gameTiles = Object.entries(props.games ?? {}).map(
    ([k, v]) => html`<${GameTile} key=${k} id=${k} details=${v} />`
  )

  const cssStyle = useStyles({
    selector: '#games',
    styles: {
      default: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      },
    },
  })

  return html`<span><${PlayerTokens} /><div id="games">${gameTiles}${cssStyle}</div></span>`
}
