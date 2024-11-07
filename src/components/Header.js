import html from '../../core.js'

export default function Header() {
    return html`
    <div class="todo-header">
        <h2>ToDo List</h2>
        <button style={height: 50px}>📝</button>
    </div>
  `
}
