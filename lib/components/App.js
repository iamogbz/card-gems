import { html } from '../deps/html.js'
import { CurrentGame } from './games/CurrentGame.js'
import { Games } from './games/Games.js'
import { useAppState } from './hooks/useAppState.js'
import { useDayNightToggle } from './hooks/useDayNightToggle.js'
import { useStyles } from './hooks/useStyles.js'

export function App() {
  const [appState] = useAppState('app')
  const [dayNightToggle, isDarkMode] = useDayNightToggle()
  const appContent = appState?.currentGame.id
    ? html`<${CurrentGame} />`
    : html`<${Games} games=${appState?.gameOptions} />`

  return html`<${AppWrapper} darkMode=${isDarkMode}>${dayNightToggle}${appContent}</${AppWrapper}>`
}

function AppWrapper({ darkMode, style, children, ...props }) {
  const cssStyle = useStyles({
    selector: 'body',
    styles: {
      default: {
        filter: darkMode ? 'invert(1)' : 'initial',
      },
    },
  })
  return html`<div id="app-wrapper" ...${props}>${children}${cssStyle}</div>`
}
