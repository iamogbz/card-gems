import { html } from '../../deps/html.js'
import { useRandomId } from '../hooks/useRandomId.js'
import { useStyles } from '../hooks/useStyles.js'
import { HiddenCardContent } from './HiddenCardContent.js'

export function Card({ content, placeholder, style, ...props }) {
  const classId = useRandomId({ prefix: 'card-' })
  const borderStyle = React.useMemo(
    () => ({
      borderStyle: placeholder ? 'dashed' : 'solid',
      borderColor: placeholder ? 'darkgray' : 'black',
    }),
    [placeholder]
  )
  const cssStyle = useStyles({
    selector: `${CARD_GEM_ELEM_TAG}[${CARD_GEM_CLASS_ID_ATTR}='${classId}']`,
    styles: {
      default: {
        ...DEFAULT_CARD_STYLE,
        ...borderStyle,
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
// const CARD_FONT_EM = 1.2
const CARD_FONT_PX = 16
const CARD_WIDTH = 156
const CARD_RATIO = 1.5
const CARD_GEM_CLASS_ID_ATTR = 'data-gem-class-id'
const CARD_GEM_ELEM_TAG = 'div'

export function cardDimensions(width) {
  return {
    fontSize: `${Math.pow(width / CARD_WIDTH, 2) * CARD_FONT_PX}px`,
    height: `${width * CARD_RATIO}px`,
    width: `${width}px`,
  }
}

export const DEFAULT_CARD_SIZE_STYLE = cardDimensions(CARD_WIDTH)
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
  fontWeight: '900',
  justifyContent: 'center',
  overflow: 'hidden',
  scale: '100%',
  textAlign: 'center',
  transition: 'scale 0.3s ease-in-out',
}
