import './react.js'
import './react-dom.js'
import 'https://unpkg.com/prop-types@15/prop-types.js'
import htm from 'https://unpkg.com/htm@latest?module'

const html = htm.bind(React.createElement)

export { html }
