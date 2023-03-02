import { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [task, setTask] = useState("")
  
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(task)
    setTask("")
  }

  return (
    <form className={styles.addTodo} onSubmit={(e) => handleSubmit(e)} /* A função só sera chamada quando ocorrer o EVENTO */>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add the task..."
        onChange={(e) => handleChange(e)}
        value={task}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
