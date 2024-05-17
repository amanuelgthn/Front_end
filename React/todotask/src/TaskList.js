import { useState } from 'react';
export default function TaskList({todos, onChangeTodo, onDeleteTodo}) {
    
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task 
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                        />
                </li>))}
        </ul>
    )
}

function Task({todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let toDocontent;
    if (isEditing) {
        toDocontent = (
        <>
            <input
                value={todo.title}
                onChange={e => {
                    onChange({
                        ...todo,
                        title: e.target.value
                    });
                } } 
                />
            <button 
                onClick={() => setIsEditing(false)}
                >
                    Save
            </button>
        </>
        )
    } else {
        toDocontent = (
        <>
            {todo.title}
            <button 
                onClick={()=> setIsEditing(true)}
            >
                Edit
            </button>
        </>)
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    });
                }} 
            />
                {toDocontent}
            <button 
                onClick={() => onDelete(todo.id)}
                >
                    Delete
            </button>
        </label>
    )
}