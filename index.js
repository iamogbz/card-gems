import { App } from './lib/components/App.js'
import { html } from './lib/deps/html.js'

const rootElement = document.getElementById('root')
const appComponent = html`<${App} />`
ReactDOM.createRoot(rootElement).render(appComponent)
