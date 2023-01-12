import { html } from '../deps/html.js'
import { Games } from './games/Games.js'
import { useAppState } from './hooks/useAppState.js'

export function App() {
  const [appState] = useAppState('app')

  if (appState?.currentGame) {
    // render current game
    return html`<div>${appState.currentGame}</div>`
  } else {
    // render game options
    return html`<${Games} games=${appState?.gameOptions} />`
  }
}
