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

export const DEFAULT_CARD_SIZE_STYLE = {
  height: `${CARD_WIDTH * CARD_RATIO}px`,
  width: `${CARD_WIDTH}px`,
}
export const DEFAULT_CARD_BORDER_STYLE = {
  border: `solid ${CARD_BORDER_WIDTH}px black`,
  borderRadius: `${CARD_BORDER_RADIUS}px`,
  padding: `${CARD_BORDER_RADIUS}px`,
}
const DEFAULT_CARD_STYLE = {
  ...DEFAULT_CARD_SIZE_STYLE,
  ...DEFAULT_CARD_BORDER_STYLE,
  alignItems: 'center',
  backgroundColor: 'white',
  color: 'black',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'monospace',
  fontSize: '1.2em',
  fontWeight: '600',
  justifyContent: 'center',
  overflow: 'hidden',
  scale: '100%',
  textAlign: 'center',
  transition: 'scale 0.3s ease-in-out',
}
