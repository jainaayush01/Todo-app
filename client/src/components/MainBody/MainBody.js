import { React, useEffect, useState } from "react";
import Button from "@material-ui/core/Button/index.js";

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
        list.splice(i, 1);
        setList([...list]);
    };

    //removes that from list and focuses on input-task and edits the value as well
    const handleEdit = (e) => {
        const i = parseInt(e.target.className);
        var temp = list.splice(i, 1);
        setList([...list]);
        setTask(temp);
        document.getElementById("input-task").focus();
    };

    // If  a person wants to add mutliple tasks in one go
    useEffect(() => {
        document.getElementById("input-task").focus();
    }, [task]);

    return (
        <>
            <div className="main-container">
                <h1>To-do List</h1>
                <div className="add-task">
                    <input
                        type="text"
                        value={task}
                        id="input-task"
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a task..."
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleAdd}
                        style={{
                            marginRight: 10
                        }}
                    >
                        Add Task
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setTask("")}
                    >
                        Clear
                    </Button>
                </div>
                <div className="clear">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            setList([]);
                            setTask("");
                        }}
                    >
                        Clear All Items
                    </Button>
                </div>
            </div>
            <div className="task-list">
                {list.map((task, i) => {
                    return (
                        <div key={i} className="task-item">
                            <h2 style={{marginBottom: 5}}>{task}</h2>
                            <Button
                                className={String(i)}
                                variant="contained"
                                color="secondary"
                                onClick={handleEdit}
                                style={{
                                    marginRight: 10
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                className={String(i)}
                                variant="contained"
                                color="secondary"
                                onClick={handleRemove}
                            >
                                Remove
                            </Button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MainBody;
