import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../Store";
import storage from "../Store/Store";

export const EditToDoForm = ({ editJob, task }) => {
  const { todos, setTodo } = useContext(StoreContext);
  const [editedJob, setEditedJob] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedJob.trim() !== "") {
      editJob(editedJob, task.id);
    }
  };

  const handleCancel = () => {
    // Reset the editedJob state to the original task value
    setEditedJob(task.task);

    // Toggle the editing state back to false
    setTodo(
      todos.map((todo) =>
        todo.id === task.id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todos);
    storage.set(todos);
  }, [todos]);

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Update"
        value={editedJob}
        onChange={(e) => setEditedJob(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update TASK
      </button>
      <button className="todo-btn" style={{ marginLeft: '10px' }} onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};
