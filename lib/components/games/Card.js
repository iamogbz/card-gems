import { html } from '../../deps/html.js'
import { useRandomId } from '../hooks/useRandomId.js'
import { useStyles } from '../hooks/useStyles.js'
import { HiddenCardContent } from './HiddenCardContent.js'

export function Card({
  content,
  placeholder,
  style,
  width = CARD_WIDTH,
  ...props
}) {
  const classId = useRandomId({ prefix: 'card-' })
  const inlineStyle = React.useMemo(
    () => ({
      ...cardDimensions(width),
      ...cardBorder(placeholder),
      ...cardFont(width, content),
    }),
    [content, placeholder, width]
  )
  const cssStyle = useStyles({
    selector: `${CARD_GEM_ELEM_TAG}[${CARD_GEM_CLASS_ID_ATTR}='${classId}']`,
    styles: {
      default: {
        ...DEFAULT_CARD_STYLE,
        ...inlineStyle,
        ...style,
      },
      hover: {
        scale: '104%',
      },
    },
  })
  const noContent = html`<${HiddenCardContent} />`

  const elemProps = {
    "data-gem-class-id": classId,
    tabIndex: 0,
  }
  return html`<${CARD_GEM_ELEM_TAG} ...${elemProps} ...${props}>
    ${content ?? noContent} ${cssStyle}
  </${CARD_GEM_ELEM_TAG}>`
}

function cardDimensions(width) {
  return {
    height: `${width * CARD_RATIO}px`,
    width: `${width}px`,
  }
}

function cardBorder(placeholder) {
  return {
    borderStyle: placeholder ? 'dashed' : 'solid',
    borderColor: placeholder ? 'darkgray' : 'black',
  }
}

function cardFont(width, content) {
  const fontPx = Math.pow(1.42 + Math.pow(0.68, content?.length ?? 1), 8)
  const resizeRatio = Math.pow(width / CARD_WIDTH - CARD_WIDTH / width, 1.5)
  return {
    fontSize: `${fontPx * resizeRatio}px`,
  }
}

export const CARD_BORDER_WIDTH = 4
export const CARD_BORDER_RADIUS = 8
// const CARD_FONT_EM = 1.2
// const CARD_FONT_PX = 16
const CARD_WIDTH = 156
const CARD_RATIO = 1.5
const CARD_GEM_CLASS_ID_ATTR = 'data-gem-class-id'
const CARD_GEM_ELEM_TAG = 'div'

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
