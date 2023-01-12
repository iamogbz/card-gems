import { html } from '../../deps/html.js'
import { useRandomId } from '../hooks/useRandomId.js'
import { useStyles } from '../hooks/useStyles.js'

export function Card({ content, style, ...props }) {
  const className = useRandomId({ prefix: 'card-' })
  const cssStyle = useStyles({
    selector: `.${className}`,
    styles: {
      default: {
        ...DEFAULT_CARD_STYLE,
        ...style,
      },
      hover: {
        scale: '104%',
      },
    },
  })

  return html`<div className=${className} ...${props}>
    ${content} ${cssStyle}
  </div>`
}

const CARD_WIDTH = 96
const CARD_RATIO = 1.4

const DEFAULT_CARD_STYLE = {
  alignItems: 'center',
  backgroundColor: 'white',
  border: 'solid 4px black',
  borderRadius: '8px',
  color: 'black',
  display: 'flex',
  fontFace: 'monospace',
  fontSize: '1.2em',
  fontWeight: '600',
  height: `${CARD_WIDTH * CARD_RATIO}px`,
  justifyContent: 'center',
  padding: '8px',
  scale: '100%',
  textAlign: 'center',
  transition: 'scale 0.3s ease-in-out',
  width: `${CARD_WIDTH}px`,
}
