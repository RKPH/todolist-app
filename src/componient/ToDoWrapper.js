import React, { useContext, useState } from "react";
import { StoreContext } from "../Store";
import { ToDoForm } from "./ToDoForm";
import { ToDo } from "./ToDo";
import { EditToDoForm } from "./EditToDoForm";

export const ToDoWrapper = () => {
  const { todos, setTodo, currentTab, setCurrentTab } =
    useContext(StoreContext);

  const [selectedTasks, setSelectedTasks] = useState([]);
  
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(updatedTodos);
  };
  const deleteJob = (id) => {
    const updatedTodos = todos.filter(
      todo => todo.id !== id
    );
    setTodo(updatedTodos);
    // Clear selected tasks after deletion
  };
  
  const deleteJobs = () => {
    const updatedTodos = todos.filter(
      (todo) => !selectedTasks.includes(todo.id)
    );
    setTodo(updatedTodos);
    // Clear selected tasks after deletion
    setSelectedTasks([]);
  };

  const editJob = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleSelect = (id) => {
    if (selectedTasks.includes(id)) {
      // Deselect the task
      setSelectedTasks(selectedTasks.filter((taskId) => taskId !== id));
    } else {
      // Select the task
      setSelectedTasks([...selectedTasks, id]);
    }
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
          <EditToDoForm editJob={editTask} task={todo} />
        ) : (
          <ToDo
            task={todo}
            key={todo.id}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteJob={deleteJob}
            editJob={editJob}
            isSelected={selectedTasks.includes(todo.id)}
            handleSelect={handleSelect}
          />
        )
      )}

      {selectedTasks.length > 0 && filteredTodos().length > 0 && (
        <div>
          <button className="todo-btn" onClick={deleteJobs}>
            Delete Selected
          </button>
        </div>
      )}
    </div>
  );
};
