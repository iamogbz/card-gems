import { html } from '../deps/html.js'
import { CurrentGame } from './games/CurrentGame.js'
import { Games } from './games/Games.js'
import { useAppState } from './hooks/useAppState.js'

export function App() {
  const [appState] = useAppState('app')

  if (appState?.currentGame) {
    return html`<${CurrentGame} />`
  } else {
    return html`<${Games} games=${appState?.gameOptions} />`
  }
}
