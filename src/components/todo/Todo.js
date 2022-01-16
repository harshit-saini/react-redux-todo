import React, { } from 'react'
import { useDispatch } from 'react-redux'
import { changeInput } from '../input/inputSlice'
import { toggleComplete, deleteTodo } from '../todo/todoSlice'

const Todo = ({ title, completed, id }) => {

  const getBgColor = () => completed === true ? "bg-info" : "bg-danger"

  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleComplete(id))
  }

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id))
  }

  const handleTodoEdit = () => {
    dispatch(changeInput(title));
    dispatch(deleteTodo(id))
  }

  return (
    <div className={`p-3 m-2 bg-info ${getBgColor()} rounded`}>
      <div className='d-flex align-items-center mb-2'>
        <input onChange={handleCheck} className='form-check-input m-0 flex-shrink-0' type="checkbox" name="" id={id} value={completed} checked={completed} />
        <h4 className='ms-3' >{title}</h4>
      </div>
      <button onClick={handleDeleteTodo} className='btn btn-dark me-2 mt-2'>Delete</button>
      <button onClick={handleTodoEdit} className='btn btn-light mt-2'>edit</button>
    </div>
  )
}

export default Todo
