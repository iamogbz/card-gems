import { html } from '../../deps/html.js'
import { useAppState } from '../hooks/useAppState.js'
import { useStyles } from '../hooks/useStyles.js'
import { GameTile } from './GameTile.js'
import { HiddenCardContent } from './HiddenCardContent.js'
import { PlayerTokens } from './PlayerTokens.js'

/**
 * Games html component
 * @param {{games: GAME[]}} props
 * @returns
 */
export function Games(props) {
  const [{ players }] = useAppState()
  const playerCount = players.length
  const gameTiles = Object.entries(props.games ?? {}).map(([k, v]) =>
    v.players.min <= playerCount
      ? html`<${GameTile} key=${k} id=${k} details=${v} />`
      : html`<${GameTile} key=${k}><${HiddenCardContent} /></${GameTile}>`
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

  return html`<span
    ><${PlayerTokens} />
    <div id="games">${gameTiles}${cssStyle}</div></span
  >`
}
