import styles from "./TodoList.module.css";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const TodoList = (props) => {
  return (
    <main>
      <div className={styles.todoList}>
        <Checkbox />
        <p>asdasd</p>
        <DeleteIcon />
      </div>
    </main>
  );
};

export default TodoList;
