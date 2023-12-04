// ToDoList.js
import React, { useContext } from "react";
import { StoreContext } from "../Store";
import { ToDoForm } from "./ToDoForm";
import { ToDo } from "./ToDo";
import { EditToDoForm } from "./EditToDoForm";

export const ToDoWrapper = () => {
  const { todos, setTodo, currentTab, setCurrentTab } =
    useContext(StoreContext);
  ///
  const toggleComplete = (id) => {
    // Update todos by toggling the completed property of the specified todo
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(updatedTodos);
  };
  /// delete fuction
  const deleteJob = (id) => {
    // Filter out the task with the specified id
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // Update the state to reflect the removal of the task
    setTodo(updatedTodos);
  };

  const editJob = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task,id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const filteredTodos = () => {
    if (currentTab === "active") {
      return todos.filter((todo) => !todo.completed);
    } else if (currentTab === "completed") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  };

  return (
    <div className="TodoWrapper">
      <ToDoForm />
      {/* Update your JSX for the buttons in ToDoList.js */}
      <div className="tabs">
        <button
          onClick={() => setCurrentTab("all")}
          className={currentTab === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setCurrentTab("active")}
          className={currentTab === "active" ? "active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setCurrentTab("completed")}
          className={currentTab === "completed" ? "active" : ""}
        >
          Completed
        </button>
      </div>

      {filteredTodos().map((todo) =>
        todo.isEditing ? (
          <EditToDoForm  editJob={editTask} task={todo}/>
        ) : (
          <ToDo
            task={todo}
            key={todo.id}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteJob={deleteJob}
            editJob={editJob}
          />
        )
      )}
    </div>
  );
};
