import './App.css';
import Input from './components/input/Input';
import TodoList from './components/todoList/TodoList'

function App() {
  return (
    <div className="app">
      <div style={{ maxWidth: "600px" }}>
        <Input />
        <div>
          <TodoList />
        </div>

      </div>
    </div >
  );
}

export default App;
