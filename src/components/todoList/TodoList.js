import React from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from '../todo/todoSlice'
import Todo from '../todo/Todo'

import { useDispatch } from 'react-redux'
import { deleteAll } from '../todo/todoSlice'

const TodoList = () => {

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAll())
  }

  return (
    <div>
      <button onClick={handleDeleteAll} className='btn btn-outline-danger w-100'>Delete all</button>
      <div style={{ overflowY: "scroll", height: "70vh", scrollbar: "hidden" }}>
        {todos.map(todo => (
          <Todo title={todo.item} completed={todo.completed} key={todo.id} id={todo.id} />
        ))}

      </div>

    </div>
  )
}

export default TodoList
