import { React, useEffect, useState } from "react";

const MainBody = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const handleAdd = (e) => {
        if (task.trim() === "") {
            alert("Enter a Task!");
            return;
        }
        setList([...list, task]);
        setTask("");
    };

    const handleRemove = (e) => {
        const i = parseInt(e.target.className);
        setList([...list.slice(0, i), ...list.slice(i + 1)]);
    };

    //removes that from list and focuses on input-task and edits the value as well
    const handleEdit = (e) => {
        handleRemove(e);
        const i = parseInt(e.target.className);
        setTask(list[i]);
        document.getElementById("input-task").focus();
    };

    // If  a person wants to add mutliple tasks in one go
    useEffect(() => {
        document.getElementById("input-task").focus();
    }, [task]);

    return (
        <>
            <div className="container">
                <h1>To-do List</h1>
                <div className="add-task">
                    <input
                        type="text"
                        value={task}
                        id="input-task"
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a task..."
                    />
                    <button onClick={handleAdd}>Add Task</button>
                    <button onClick={() => setTask("")}>Clear</button>
                </div>
                <div className="clear">
                    <button
                        onClick={() => {
                            setList([]);
                            setTask("");
                        }}
                    >
                        Clear All Items
                    </button>
                </div>
                {list.map((task, i) => {
                    return (
                        <div key={i} className="task-item">
                            <h2>{task}</h2>
                            <button className={i} onClick={handleEdit}>
                                Edit
                            </button>
                            <button className={i} onClick={handleRemove}>
                                Remove
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MainBody;
