import React from "react";

import { StoreContext } from "../Store";
import { useContext } from "react";
import { useEffect  } from "react";
import storage from "../Store/Store";

export const EditToDoForm = ({editJob,task}) => {
  const { job, setJob, todos} = useContext(StoreContext);
 
  const HandleSubmit = (e) => {
    e.preventDefault();
    if(job.trim()!=="") {

      editJob(job,task.id);
      setJob("")
      
    }
  };
  useEffect(() => {
    console.log(todos);
    storage.set(todos)
  }, [todos]);
  return (
    <form className="ToDoForm" onSubmit={HandleSubmit}>
      <input
 
        className="todo-input"
        type="text"
        placeholder="What is it today"
        name=""
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button
        type="submit"
        className="todo-btn"
       
      >Update TASK</button>
    </form>
  );
};
