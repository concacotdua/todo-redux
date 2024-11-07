import html from "../../core.js";

export default function TodoItem({ todo, index }) {
    return html`
        <h5 id="Alert"></h5>
        <div>
            <li class="${todo.completed && 'completed'}">
                <input 
                type="checkbox" 
                class="todo-controls"
                ${todo.completed && 'checked'}
                onchange="dispatch('toggle', ${index})"
                >
                <label>${todo.title}</label>
                <div>
                    <button class="edit todo-controls">✏️</button>
                    <button class="delete todo-controls" onclick="dispatch('delete', ${index})">🗑️</button>
                </div>
            </li>  
        </div>
    `
}
