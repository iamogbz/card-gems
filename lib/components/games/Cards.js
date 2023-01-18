import { html } from '../../deps/html.js'
import { useRandomId } from '../hooks/useRandomId.js'
import { useStyles } from '../hooks/useStyles.js'
import {
  Card,
  CARD_BORDER_RADIUS,
  CARD_BORDER_WIDTH,
  DEFAULT_CARD_BORDER_STYLE,
  DEFAULT_CARD_SIZE_STYLE,
} from './Card.js'

export function Cards({ count, style, ...props }) {
  const classId = useRandomId({ prefix: `${CARD_STACK_ID}-` })
  const borderStyle = React.useMemo(
    () => ({
      borderStyle: count ? 'solid' : 'dashed',
      borderColor: count ? '#000' : '#999',
    }),
    [count]
  )
  const cardStyle = React.useMemo(
    () => ({ ...borderStyle, ...style }),
    [borderStyle, count]
  )

  const sheetStyles = useStyles({
    selector: `#${classId}::before`,
    styles: {
      default: {
        ...DEFAULT_CARD_SIZE_STYLE,
        ...DEFAULT_CARD_BORDER_STYLE,
        ...borderStyle,
        borderColor: 'transparent',
        boxShadow: cardsBoxShadowStyle(count) || 'initial',
        content: `''`,
        left: 0,
        position: 'absolute',
        top: 0,
      },
    },
  })

  return html`<div id=${classId} style=${{ position: 'relative' }}>
    <${Card} ...${props} style=${cardStyle} />
    ${sheetStyles}
  </div>`
}

function cardsBoxShadowStyle(cardCount) {
  const shadowColors = ['white', 'gray', 'black']
  const shadowSection = (color, cardIdx = 0, shadowIdx = 0) => {
    // if (!cardIdx) return

    const startY =
      (CARD_BORDER_RADIUS * (1 - cardIdx / cardCount)) *
        cardIdx -
      CARD_BORDER_WIDTH
    const shadowY = CARD_BORDER_WIDTH * shadowIdx * 0.6
    const offsetY = startY + shadowY
    const spread = cardIdx * 0.01
    const blur = -(shadowIdx + cardIdx) * 0.01

    return `0 ${offsetY}px ${spread}px ${blur}px ${color}`
  }
  return new Array(Math.min(cardCount, MAX_CARD_STACK_DISPLAY_COUNT))
    .fill()
    .flatMap((_, n) => shadowColors.map((c, i) => shadowSection(c, n, i)))
    .filter(Boolean)
    .join(',')
}

const MAX_CARD_STACK_DISPLAY_COUNT = Number.POSITIVE_INFINITY
const CARD_STACK_ID = 'card-stack'
