import React from "react";

import { StoreContext } from "../Store";
import { useContext } from "react";
import { useEffect ,useRef} from "react";
import storage from "../Store/Store";

export const ToDoForm = () => {
  const { job, setJob, todos, setTodo ,initailState,setDate,setTime} = useContext(StoreContext);
  
  const inputRef = useRef();
  const HandleSubmit = (e) => {

    e.preventDefault();
    if (job.trim() !== "") {
      const newTask = {
        ...initailState,
        date: new Date().toLocaleDateString(), // Calculate the date dynamically here
        time:new Date().toLocaleTimeString()
      };
      setTodo([...todos, newTask]);
      setDate(newTask.date); // Set the date to the dynamically calculated date
      setTime(newTask.time);
      setJob("");
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    console.log(todos);
 
    storage.set(todos)
  }, [todos]);
  return (
    <form className="ToDoForm">
      <input
        ref={inputRef}
        className="todo-input"
        type="text"
        placeholder="What is it today"
        name="1"
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button
        type="submit"
        className="todo-btn"
        onClick={HandleSubmit}
      >ADD TASK</button>
    </form>
  );
};
