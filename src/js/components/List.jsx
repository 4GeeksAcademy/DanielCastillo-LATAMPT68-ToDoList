import React, { useState } from "react";

export const List = () => {
    const [taskList, setTaskList] = useState([]);
    const [draftText, setDraftText] = useState("");

    const appendTask = () => {
        const cleanValue = draftText.trim();

        if (!cleanValue) return;

        setTaskList((currentTasks) => [...currentTasks, cleanValue]);
        setDraftText("");
    };

    const deleteTask = (taskIndex) => {
        const filteredTasks = taskList.filter((_, currentIndex) => currentIndex !== taskIndex);
        setTaskList(filteredTasks);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") {
            appendTask();
        }
    };

    return (
        <div className="container mt-5">
            <div className="mx-auto" style={{ maxWidth: "500px" }}>
                <h1 className="text-center text-secondary mb-4">Task Tracker</h1>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Type a task and press Enter"
                    value={draftText}
                    onChange={(event) => setDraftText(event.target.value)}
                    onKeyDown={handleInputKeyDown}
                />

                <ul className="list-group">
                    {taskList.length === 0 ? (
                        <li className="list-group-item text-muted text-center">
                            No tasks added yet.
                        </li>
                    ) : (
                        taskList.map((taskName, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span>{taskName}</span>

                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => deleteTask(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))
                    )}
                </ul>

                <p className="text-muted small mt-3 mb-0">
                    {taskList.length === 0
                        ? "Your task list is empty."
                        : `${taskList.length} pending task${taskList.length > 1 ? "s" : ""}`}
                </p>
            </div>
        </div>
    );
};