import { html } from '../../deps/html.js'
import { useRandomId } from '../hooks/useRandomId.js'
import { ToggleButton } from './ToggleButton.js'

export function ToggleSwitch({
  states = DEFAULT_STATES,
  current = 0,
  showButtonLabels = false,
  style,
  onToggle,
} = {}) {
  const switchId = useRandomId('switch')
  const toggleNodes = states.map((v, i) => {
    const isOn = current === i
    return html`<${ToggleButton}
        isOn=${isOn}
        key=${i}
        onToggle=${onToggle}
        value=${i}>
        ${showButtonLabels && !isOn ? `${v}` : null}
      </${ToggleButton}>`
  })

  return html`<${SwitchGroup} id=${switchId} style=${style}>${toggleNodes}</${SwitchGroup}>`
}

function SwitchGroup({ id, style, ...props }) {
  props.style = {
    alignItems: 'center',
    borderRadius: '8px',
    display: 'flex',
    gridGap: '4px',
    justifyContent: 'center',
    padding: '4px',
    width: 'fit-content',
    ...style,
  }

  return html`<div id="${[id]}group" ...${props} />`
}

const DEFAULT_STATES = [false, true]
