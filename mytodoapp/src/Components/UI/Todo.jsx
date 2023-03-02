import styles from "./Todo.module.css"
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Todo = ({ text }) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = () => {
        setIsChecked(!isChecked)
    }

  return (
      <div className={styles.todo}>
        <Checkbox onClick={handleCheckBox} />
        {isChecked ? (
          <p>
            <s>{text}</s>
          </p>
        ) : (
          <p>{text}</p>
        )}
        <DeleteIcon />
      </div>
  );
};

export default Todo
