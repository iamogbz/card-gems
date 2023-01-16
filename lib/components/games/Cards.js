import { html } from '../../deps/html.js'
import { Card, CARD_BORDER_RADIUS, CARD_BORDER_WIDTH } from './Card.js'

export function Cards({ count, ...props }) {
  const style = React.useMemo(
    () => ({
      ...props.style,
      borderStyle: count ? 'solid' : 'dashed',
      borderColor: count ? '#000' : '#999',
      boxShadow: cardsBoxShadowStyle(count) || 'initial',
    }),
    [props.style, count]
  )

  return html`<${Card} ...${props} style=${style} />`
}

function cardsBoxShadowStyle(cardCount) {
  return new Array(Math.min(cardCount, MAX_CARD_STACK_DISPLAY_COUNT))
    .fill()
    .map((_, n) => {
      const height = CARD_BORDER_RADIUS * (n + 0.5)
      return `0 ${height}px 0 0 #FFF, 0 ${
        height + CARD_BORDER_WIDTH
      }px 0 0 #000`
    })
    .join(',')
}

const MAX_CARD_STACK_DISPLAY_COUNT = 24
