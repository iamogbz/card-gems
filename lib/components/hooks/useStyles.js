import { html } from '../../deps/html.js'

/**
 * Create style component that can be inserted in document applying to a specific selector
 * @param {{selector: string; styles:Record<string, CSSStyleDeclaration>}} props
 * @returns {HTMLElement}
 */
export function useStyles(props) {
  return html`<style type="text/css">
    ${props.selector} {${asTextStyle(props.styles.default)}}
    ${props.selector}:hover {${asTextStyle(props.styles.hover)}}
  </style>`
}

function asTextStyle(style, sep = ';\n') {
  return Object.entries(fromReactStyle(style))
    .map(([k, v]) => `${k}: ${v}`)
    .join(sep)
}

function fromReactStyle(style = {}) {
  return Object.keys(style).reduce(
    (a, c) => ({ ...a, [convertCamelToSpinalCase(c)]: style[c] }),
    {}
  )
}

function convertCamelToSpinalCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
