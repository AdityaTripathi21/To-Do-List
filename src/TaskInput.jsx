import { useState } from "react";

function TaskInput({onAddTask}) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(inputValue);
        setInputValue("");
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a task..." value = {inputValue}
            onChange={(event) => setInputValue(event.target.value)}/>
            <button type="submit">Add</button>
        </form>);
}

export default TaskInput