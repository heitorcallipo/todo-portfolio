import { useState } from "react";
import styles from "./AddTodo.module.css";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

const AddTodo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [task, setTask] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  function handleCheckBox() {
    setIsChecked((prevState) => !prevState);
  }

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoArray((prevTodoArray) => {
      return [...prevTodoArray, setTask];
    });
  };

  const tasksElements = todoArray.map((item) => <p>{item}</p>);

  return (
    <div>
      <div className={styles.addTodo}>
        <form onSubmit={handleSubmit}>
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add the task..."
            onChange={handleChange}
            value={task}
          />
          <button>Add</button>
        </form>
      </div>
      <main>
        <div className={styles.todoList}>
          <Checkbox onClick={handleCheckBox} />
          {isChecked ? (
            <p>
              <s>asdfasdf</s>
            </p>
          ) : (
            <p>asdfasdf</p>
          )}
          <DeleteIcon />
        </div>
      </main>
    </div>
  );
};

export default AddTodo;
