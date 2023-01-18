import { html } from '../../deps/html.js'

export function HiddenCardContent() {
  return html`<div style=${HIDDEN_CARD_CONTENT_STYLE}></div>`
}

const HIDDEN_CARD_CONTENT_STYLE = {
  background:
    'repeating-linear-gradient(45deg, gray, gray 10px, lightgray 10px, lightgray 20px)',
  display: 'flex',
  height: '200%',
  margin: '-50%',
  width: '200%',
}
