import { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = () => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  return (
    <div className={styles.addTodo}>
      <form>
        <h1>Todo List</h1>
        <input type="text" placeholder="Add the task..." onChange={handleChange} value={task}/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
