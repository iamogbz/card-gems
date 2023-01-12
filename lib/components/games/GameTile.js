import { html } from '../../deps/html.js'
import { useAppState } from '../hooks/useAppState.js'
import { Card } from './Card.js'

export function GameTile(props) {
  const [, setAppState] = useAppState('game-tile')

  const handleMouseUp = React.useCallback(
    function (e) {
      e.preventDefault()
      setAppState((state) => ({ ...state, currentGame: props.details.title }))
    },
    [props.details.title]
  )

  return html`<${Card}
    content=${props.details.title}
    style=${DEFAULT_TILE_STYLE}
    onClick=${handleMouseUp}
  />`
}

const DEFAULT_TILE_STYLE = {
  cursor: 'pointer',
}
