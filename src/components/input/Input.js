import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { saveTodo } from '../todo/todoSlice';

import { getInput, changeInput } from '../input/inputSlice'

const Input = () => {

  const input = useSelector(getInput)

  const dispatch = useDispatch();

  const addTodo = () => {
    if (input.trim().length === 0) return alert("write something");
    dispatch(changeInput(""))
    dispatch(saveTodo({
      item: input,
      completed: false,
      id: Date.now()
    }))
  }

  const handleInputChange = (event) => {
    // --- currentTarget is the element whose event listner is triggered 
    const { value } = event.currentTarget;
    dispatch(changeInput(value));
  }

  return (
    <div className='d-flex justify-content-between mb-1 m-1 my-md-3'>
      <input className="form-control flex-grow-1" type="text" name="" id="" value={input} onChange={handleInputChange} />
      <button className="btn-primary flex-grow-0 flex-shrink-0" style={{ width: "100px" }} onClick={addTodo}>ADD</button>
    </div>
  )
}

export default Input
