import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/todo/todoSlice';
import inputReducer from '../components/input/inputSlice'

//  configure store is a function we just have to pass all the reducers to it and then
// export it

const store = configureStore({
  reducer: {
    todos: todoReducer,
    input: inputReducer
  }
})

export default store;

// now we have to use the react-redux package so that our application can access this store
// we do this in the app component with the help of provider comoponent from the react-redux