import { useState } from "react";

function TaskInput() {
    const [inputValue, setInputValue] = useState("");
    return(<>
        <form action="">
            <input type="text" placeholder="Enter a task..." value = {inputValue}
            onChange={(event) => setInputValue(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </>);
}

export default TaskInput