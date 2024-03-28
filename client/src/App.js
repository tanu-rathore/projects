
import './App.css';

//components
import Header from './components/Header'; //heading- todolist
import TodoForm from './components/TodoForm'; //form - enter new todo
import Todos from './components/Todos'; //display- all todos, active todos, done todos

function App() {
  return (
    <div>
      <Header /> 
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
