import { html } from '../../deps/html.js'
import { useAppState } from '../hooks/useAppState.js'
import { useStyles } from '../hooks/useStyles.js'

export function PlayerToken() {
  const [{ players, currentGame }] = useAppState('player-token')
  const drawnCards = currentGame?.state?.drawnCards ?? {}
  const currentPlayer =
    Object.entries(drawnCards).filter(([, v]) => v).length % players.length
  const currentPlayerToken = TOKENS[players[currentPlayer]]
  const tokenStyles = useStyles({
    selector: `.${CLS.PlayerToken}`,
    styles: {
      default: STYLES.PlayerToken,
    },
  })
  return html`<span>
    NEXT
    <button className="${CLS.PlayerToken}">
      ${tokenStyles} ${currentPlayerToken}
    </button></span
  >`
}

export function PlayerTokens(props) {
  const [appState, setAppState] = useAppState('player-tokens')

  const wrapperStyles = useStyles({
    selector: `.${CLS.TokenWrapper}`,
    styles: {
      default: STYLES.TokenWrapper,
    },
  })
  const tokenStyles = useStyles({
    selector: `.${CLS.PlayerToken}`,
    styles: {
      default: STYLES.PlayerToken,
    },
  })

  const gamePlayers = appState.players
  const onRemoveToken = React.useCallback(
    (tokenIdx) => {
      const minAllowedPlayers = 1
      if (gamePlayers.length <= minAllowedPlayers) return
      setAppState((s) => ({
        ...s,
        players: gamePlayers.filter((vi) => vi !== tokenIdx),
      }))
    },
    [gamePlayers]
  )
  const onAddPlayer = React.useCallback(() => {
    const playerTokenChoices = TOKENS.map((_, i) => i).filter(
      (vi) => !gamePlayers.includes(vi)
    )
    const newPlayerTokenIdx =
      playerTokenChoices[Math.floor(Math.random() * playerTokenChoices.length)]
    setAppState((s) => ({ ...s, players: [...gamePlayers, newPlayerTokenIdx] }))
  })
  onAddPlayer.title = 'Add Player'

  // create a token button
  const tokenBtn = (t, onClick) =>
    html`<button
      key="${t}"
      className="${CLS.PlayerToken}"
      onClick=${onClick}
      title="${onClick.title}"
    >
      ${t}
    </button>`
  const playerTokenBtn = (idx) =>
    tokenBtn(TOKENS[idx], () => onRemoveToken(idx))
  const addPlayerBtn = () => tokenBtn('➕', onAddPlayer)
  // create token buttons for all game players
  const playerTokens = gamePlayers.map(playerTokenBtn)
  return html`<div className="${CLS.TokenWrapper}" ...${props}>
    ${wrapperStyles}${tokenStyles}${playerTokens}${addPlayerBtn()}
  </div>`
}

const CLS = {
  PlayerToken: 'player-token',
  TokenWrapper: 'token-wrapper',
}
const STYLES = {
  PlayerToken: {
    display: 'flex',
    padding: '1em',
    width: '2em',
    height: '2em',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '2em',
    borderRadius: '0.5em',
  },
  TokenWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1em',
    gap: '1em',
  },
}
const TOKENS = [
  '🎃',
  '🐔',
  '🐧',
  '🐨',
  '🐭',
  '🐮',
  '🐯',
  '🐰',
  '🐱',
  '🐴',
  '🐵',
  '🐶',
  '🐷',
  '🐸',
  '🐹',
  '🐻',
  '🐼',
  '👹',
  '👽',
  '💀',
  '🗿',
  '🤖',
  '🤠',
  '🤡',
  '🦁',
  '🦊',
  '🫎',
]
