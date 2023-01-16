import { html } from '../../deps/html.js'

export function HiddenCardContent() {
  return html`<div style=${HIDDEN_CARD_CONTENT_STYLE}></div>`
}

const HIDDEN_CARD_CONTENT_STYLE = {
  background:
    'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)',
  display: 'flex',
  height: '200%',
  margin: '-50%',
  width: '200%',
}
