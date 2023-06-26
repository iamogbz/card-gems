import { html } from '../../deps/html.js'
import { Card } from './Card.js'

export function CardPicker(props) {
  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '8px',
    justifyContent: 'center',
    padding: '32px 8px',
  }

  const cards = props.deck.map((c, i) => {
    const seen = props.drawnCards[i]
    const lastSeen = props.lastDrawnCardIdx === i
    const onSelect = () => props.onSelect(i)
    return html`<${Card}
      content=${seen ? (lastSeen ? null : c) : i + 1}
      key=${i}
      onClick=${onSelect}
      width=${52}
    />`
  })
  return html`<div style=${wrapperStyle}>${cards}</div>`
}
