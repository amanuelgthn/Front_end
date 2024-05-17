import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId = 3;
const initialState = [
  {
    id : 0,
    title: 'Check Email',
    done: true,
  },
  {
    id : 1,
    title: 'Eat BreakFast',
    done: true,
  }, 
  {
    id : 2,
    title: 'Go Library',
    done: true,
  }, 
]

export default function TaskApp() {
  const [todos, setTodos] = useState(initialState);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id : nextId++,
        title : title,
        done: false,
      }
    ])
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(todo=>todo.id !== todoId))
  }
  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList todos={todos} onChangeTodo={handleChangeTodo} 
                onDeleteTodo={handleDeleteTodo}/>
    </>
  )
}