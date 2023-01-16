import { html } from '../../deps/html.js'
import { useRandomId } from '../hooks/useRandomId.js'
import { useStyles } from '../hooks/useStyles.js'
import { HiddenCardContent } from './HiddenCardContent.js'

export function Card({ content, style, ...props }) {
  const classId = useRandomId({ prefix: 'card-' })
  const cssStyle = useStyles({
    selector: `${CARD_GEM_ELEM_TAG}[${CARD_GEM_CLASS_ID_ATTR}='${classId}']`,
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
  const noContent = html`<${HiddenCardContent} />`

  return html`<${CARD_GEM_ELEM_TAG} data-gem-class-id=${classId} ...${props}>
    ${content ?? noContent} ${cssStyle}
  </${CARD_GEM_ELEM_TAG}>`
}

export const CARD_BORDER_WIDTH = 4
export const CARD_BORDER_RADIUS = 8
const CARD_WIDTH = 156
const CARD_RATIO = 1.5
const CARD_GEM_CLASS_ID_ATTR = 'data-gem-class-id'
const CARD_GEM_ELEM_TAG = 'div'

const DEFAULT_CARD_STYLE = {
  alignItems: 'center',
  backgroundColor: 'white',
  border: `solid ${CARD_BORDER_WIDTH}px black`,
  borderRadius: `${CARD_BORDER_RADIUS}px`,
  color: 'black',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'monospace',
  fontSize: '1.2em',
  fontWeight: '600',
  height: `${CARD_WIDTH * CARD_RATIO}px`,
  justifyContent: 'center',
  overflow: 'hidden',
  padding: `${CARD_BORDER_RADIUS}px`,
  scale: '100%',
  textAlign: 'center',
  transition: 'scale 0.3s ease-in-out',
  width: `${CARD_WIDTH}px`,
}
