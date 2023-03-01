import AddTodo from "../Header/AddTodo";
import styles from "./TodoContainer.module.css";

const TodoContainer = () => {
  return (
    <div className={styles.todoContainer}>
      <AddTodo />
    </div>
  );
};

export default TodoContainer;
