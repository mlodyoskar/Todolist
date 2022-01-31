export const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <div className={"todo"}>
            <p className={todo.completed ? "todo-name todo-name_completed" : "todo-name"}>{todo.name}</p>
            <div onClick={() => { toggleComplete(todo.name) }} className={todo.completed ? "todo-button todo-button_toggleON" : "todo-button todo-button_toggleOFF"} type="checkbox"></div>
            <div onClick={() => { deleteTodo(todo.name) }} className='todo-button todo-button_delete'></div>
        </div>
    );
}