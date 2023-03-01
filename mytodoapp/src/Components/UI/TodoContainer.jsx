import { useState } from "react";
import AddTodo from "../Header/AddTodo";
import styles from "./TodoContainer.module.css";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div className={styles.todoContainer}>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
