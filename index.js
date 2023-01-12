import * as games from './lib/games/games.js'
import { html } from './lib/deps/html.js'

const App = (props) => {
  return html`<div>Hello World! foo: ${props.foo}</div>`
}

const rootElement = document.getElementById('root')
const appComponent = html`<${App} foo='bar' />`
// ReactDOM.render(appComponent, rootElement)
ReactDOM.createRoot(rootElement).render(appComponent)
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
