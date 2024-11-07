import html from '../../core.js'
import { connect } from '../../store.js'
import TodoItem from './TodoItem.js'

function TodoBody({ todos }) {
  return html`
  <div class="todo-body">
    <input
        type="text"
        id="todoText"
        class="todo-input"
        placeholder="Add your items"
        onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
    />
    <button>➕</button>

  </div>
  <ul id="list-items" class="list-items">
      ${todos.map((todo, index) => TodoItem({ todo, index }))}
  </ul>
  `
}
export default connect()(TodoBody)