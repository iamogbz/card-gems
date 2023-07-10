import { html } from '../../deps/html.js'
import { ToggleSwitch } from '../toggle/ToggleSwitch.js'

export function useDayNightToggle() {
  const [dayOrNight, setDayNight] = React.useState(0)
  const setDayNightSwitch = (v) => setDayNight(Number(v))

  React.useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
    mediaQuery?.addEventListener('change', (e) => setDayNightSwitch(e.matches))
    setDayNightSwitch(mediaQuery?.matches)
  }, [])

  const dayNightSwitch = html`<${ToggleSwitch}
    current=${dayOrNight}
    onToggle=${setDayNightSwitch}
    showButtonLabels
    states=${APP_THEME_STATES}
    style=${DAY_NIGHT_TOGGLE_SWITCH_STYLE}
  />`
  return [dayNightSwitch, dayOrNight === APP_THEMES.indexOf(AppThemes.D)]
}

const DAY_NIGHT_TOGGLE_SWITCH_STYLE = {
  borderRadius: '0 0 8px 8px',
  filter: 'invert(1)',
  left: 0,
  position: 'absolute',
  top: 0,
}

const AppThemes = {
  L: 'Light',
  D: 'Dark',
}
const APP_THEMES = Object.values(AppThemes)
const APP_THEME_STATES = APP_THEMES.map((s) => `${s} mode`)
