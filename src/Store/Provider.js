// Provider.js
import Context from "./Context";
import { useState } from "react";
import storage from "./Store";
import {v4 as uuidv4  }from 'uuid'

function Provider({ children }) {
    const [job, setJob] = useState("");
    const [todos, setTodo] = useState(storage.get());
    const [currentTab, setCurrentTab] = useState("all");
    const initailState = {id:uuidv4(), task: job, completed: false, isEditing:false}
    return (
        <Context.Provider value={{ job, setJob, todos, setTodo ,initailState,currentTab, setCurrentTab}}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
