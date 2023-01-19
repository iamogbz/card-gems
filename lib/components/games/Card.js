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
  const classId = useRandomId({ prefix: 'card' })
  const inlineStyle = React.useMemo(
    () => ({
      ...cardDimensions(width),
      ...cardBorder(width, placeholder),
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
  const contentNode = content
    ? html`<p>${content}</p>`
    : html`<${HiddenCardContent} />`

  const elemProps = {
    'data-gem-class-id': classId,
    tabIndex: 0,
  }
  return html`<${CARD_GEM_ELEM_TAG} ...${elemProps} ...${props}>
    ${contentNode} ${cssStyle}
  </${CARD_GEM_ELEM_TAG}>`
}

function cardDimensions(width) {
  return {
    height: `${width * CARD_RATIO}px`,
    width: `${width}px`,
  }
}

function cardBorder(width, placeholder) {
  const ratio = width / CARD_WIDTH
  const borderWidthPx = Math.ceil(CARD_BORDER_WIDTH * ratio);
  const borderRadiusPx = Math.ceil(CARD_BORDER_RADIUS * ratio);
  return {
    border: `solid ${borderWidthPx}px black`,
    borderColor: placeholder ? 'darkgray' : 'black',
    borderRadius: `${borderRadiusPx}px`,
    borderStyle: placeholder ? 'dashed' : 'solid',
    padding: `${borderRadiusPx}px`,
  }
}

// function root(n, sq = 1) {
//   return Array(Math.floor(sq)).fill().reduce(Math.sqrt, n)
// }

function cardFont(width, content) {
  // const fontSize = (sizePx) => ({
  //   width: (sizePx * 2) / 3,
  //   height: (sizePx * 7) / 6,
  // })
  content = content?.toString()
  const height = width * CARD_RATIO
  const words = content?.split(' ') ?? []
  const heightCount = words.length
  const widthCount =
    words.sort((a, b) => a.length - b.length).pop()?.length ?? 0
  const sizeForHeight = (height / heightCount) * (2 / 3)
  const sizeForWidth = (width / widthCount) * (5 / 4)
  return {
    fontSize: `${(sizeForWidth + sizeForHeight) * 0.5}px`,
  }
}

export const CARD_BORDER_WIDTH = 4
export const CARD_BORDER_RADIUS = 16
// const CARD_FONT_EM = 1.2
// const CARD_FONT_PX = 16
const CARD_WIDTH = 156
const CARD_RATIO = 1.5
const CARD_GEM_CLASS_ID_ATTR = 'data-gem-class-id'
const CARD_GEM_ELEM_TAG = 'div'

export const DEFAULT_CARD_SIZE_STYLE = cardDimensions(CARD_WIDTH)
export const DEFAULT_CARD_BORDER_STYLE = cardBorder(CARD_WIDTH, false)
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
