import { html } from '../../deps/html.js'
import { useAppState } from '../hooks/useAppState.js'
import { Card } from './Card.js'

export function GameTile(props) {
  const [, setAppState] = useAppState('game-tile')

  const handleMouseUp = React.useCallback(
    function (e) {
      e.preventDefault()
      setAppState((state) => ({
        ...state,
        currentGame: { ...state.currentGame, id: props.id },
      }))
    },
    [props.id]
  )

  return html`<${Card}
    content=${props.details.title}
    onClick=${handleMouseUp}
  />`
}
