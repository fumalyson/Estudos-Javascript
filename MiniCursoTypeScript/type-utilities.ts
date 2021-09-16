type Todo = {
    title: string
    description: string
    completed: boolean
}

const todo: Readonly<Todo> = {
    title: 'Assistir rick and morty de novo',
    description: 'Por que e muito bom',
    completed: false
}

console.log(todo)

// todo.completed = true

function upTodo(todo:Todo, fieldsToUpdate:Partial<Todo>) {
    return{ ...todo, ...fieldsToUpdate}
}

const todo2: Todo = upTodo(todo, {completed: true})

console.log(todo2)

// Pick (pegar)
type TodoPreview =  Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Dark",
    completed: false
}

type TodoPreview2 =  Omit<Todo, "description">

const todo4: TodoPreview = {
    title: "Dark",
    completed: false
}