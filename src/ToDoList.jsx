import React, {useState} from "react";
import Header from "./header";
import TaskInput from "./taskinput";

function ToDoList() {
    return(<>
        <Header></Header>
        <TaskInput></TaskInput>
    </>);
}

export default ToDoList