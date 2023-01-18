import { html } from '../../deps/html.js'
import { Card, cardDimensions } from './Card.js'

export function CardPicker(props) {
  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '8px',
    justifyContent: 'center',
    padding: '32px 8px',
  }
  const tileStyle = { ...cardDimensions(52) }

  const cards = props.deck.map((c, i) => {
    const seen = props.drawnCards.has(i)
    return html`<${Card}
      key=${i}
      onClick=${() => props.onSelect(i)}
      content=${seen ? null : i + 1}
      style=${tileStyle}
    />`
  })
  return html`<div style=${wrapperStyle}>${cards}</div>`
}
