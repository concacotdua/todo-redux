import html from '../../core.js'
import Header from './Header.js'
import TodoBody from './TodoBody.js'

export default function App() {
    return html`
        <div class="container">
            ${Header()}
            ${TodoBody()}
        </div>
    `
}