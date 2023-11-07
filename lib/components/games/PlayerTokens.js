import { html } from '../../deps/html.js'
import { useAppState } from '../hooks/useAppState.js'
import { useStyles } from '../hooks/useStyles.js'

export function PlayerToken() {
  const [{ players, currentGame }] = useAppState('player-token')
  const drawnCards = currentGame?.state?.drawnCards ?? {}
  const currentPlayer =
    Object.entries(drawnCards).filter(([, v]) => v).length % players.length
  const currentPlayerToken = TOKENS[players[currentPlayer]]
  const styles = useTokenStyles()

  return html`<span>
    NEXT
    <button className="${CLS.PlayerToken}">
      ${styles}${currentPlayerToken}
    </button></span
  >`
}

export function PlayerTokens(props) {
  const [appState, setAppState] = useAppState('player-tokens')
  const styles = useTokenStyles()

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
    ${styles}${playerTokens}${addPlayerBtn()}
  </div>`
}

function useTokenStyles() {
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
  const darkModeResetA = useStyles({
    selector: `#app-wrapper[data-dark-mode="true"] .${CLS.PlayerToken}`,
    styles: {
      default: {
        filter: 'invert(1)',
      },
    },
  })
  const darkModeResetB = useStyles({
    selector: `#app-wrapper[data-dark-mode="false"] .${CLS.PlayerToken}`,
    styles: {
      default: {
        filter: 'initial',
      },
    },
  })
  return [wrapperStyles, tokenStyles, darkModeResetA, darkModeResetB]
}

const CLS = {
  PlayerToken: 'player-token',
  TokenWrapper: 'token-wrapper',
}
const STYLES = {
  PlayerToken: {
    alignItems: 'center',
    borderRadius: '0.5em',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '2em',
    height: '2em',
    justifyContent: 'center',
    padding: '1em',
    textAlign: 'center',
    width: '2em',
  },
  TokenWrapper: {
    alignItems: 'center',
    display: 'flex',
    gap: '1em',
    justifyContent: 'center',
    margin: '1em',
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
