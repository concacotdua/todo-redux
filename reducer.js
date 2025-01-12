import storage from './utils/storage.js'

const init = {
    todos: storage.get()
}

const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({ title, completed: false })
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    delete({ todos }, index) {
        todos.splice(index, 1)
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state

}