import { useState } from "react";
import "./App.css";
import Todo from "./Components/UI/Todo"
import AddTodo from "./Components/Header/AddTodo";
import List from "./Components/UI/List"

const App = () => {
  /* STATE do container para colocar os componentes TODO a serem renderizados */
  const [list, setList] = useState([]);

  /* FUNÇÃO que atualiza o state de LIST para vários TODOS */
  const addTask = (text) => {
    setList([...list, <Todo text={text}/>])
  }

  return (
    <div className="todoContainer">
      <AddTodo addTask={addTask}/>
      {list && <List list={list}/> /*Props ~~list~~ passando o STATE list para o component List */} 
    </div>
  );
}

export default App;
