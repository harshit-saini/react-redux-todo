import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: []
}

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todolist.push(action.payload)
    },
    toggleComplete: (state, action) => {
      state.todolist.forEach(item => {
        if (item.id === action.payload) {
          if (item.completed === true) item.completed = false;
          else item.completed = true;
        }
      })
    },
    deleteAll: (state) => {
      state.todolist.length = 0;
    },
    deleteTodo: (state, action) => {
      state.todolist = state.todolist.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {

    }
  }
});

export const {
  saveTodo,
  toggleComplete,
  deleteAll,
  deleteTodo
} = TodoSlice.actions
// these are actually action creators , these are functions 

export const selectTodos = state => state.todos.todolist

export default TodoSlice.reducer