import { html } from '../../deps/html.js'

export function ToggleButton({ onToggle, isOn, style, ...props }) {
  const inlineStyle = {
    ...DEFAULT_TOGGLE_BTN_STYLE,
    ...style,
  }
  props.title = (props.title ?? props.children ?? props.value)?.toString()
  props.onMouseUp = React.useCallback(
    function onClick(e) {
      e.preventDefault()
      if (isOn) return
      onToggle?.(props.value)
    },
    [props.value, onToggle]
  )
  return html`<button style=${inlineStyle} ...${props} />`
}

const DEFAULT_TOGGLE_BTN_STYLE = {
  backgroundColor: 'white',
  border: 'solid 2px black',
  color: 'black',
  cursor: 'pointer',
  borderRadius: '8px',
  display: 'inline-flex',
  margin: 0,
  outline: 'none',
  padding: '8px',
  fontSize: '16px',
}
