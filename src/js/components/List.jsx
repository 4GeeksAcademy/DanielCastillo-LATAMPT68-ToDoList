import React, { useState } from "react";

export const List = () => {
    const [todoTracker, setTodoTracker] = useState([]);
    const [texto, setTexto] = useState("");

    const aggTask = () => {
        const cleanValue = texto.trim();

        if (!cleanValue) return;

        setTodoTracker((currentTasks) => [...currentTasks, cleanValue]);
        setTexto("");
    };

    const deleteTask = (taskIndex) => {
        const filteredTasks = todoTracker.filter((_, currentIndex) => currentIndex !== taskIndex);
        setTodoTracker(filteredTasks);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") {
            aggTask();
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
                    value={texto}
                    onChange={(event) => setTexto(event.target.value)}
                    onKeyDown={handleInputKeyDown}
                />

                <ul className="list-group">
                    {todoTracker.length === 0 ? (
                        <li className="list-group-item text-muted text-center">
                            No tasks added yet.
                        </li>
                    ) : (
                        todoTracker.map((taskName, index) => (
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
                    {todoTracker.length === 0
                        ? "Your task list is empty."
                        : `${todoTracker.length} pending task${todoTracker.length > 1 ? "s" : ""}`}
                </p>
            </div>
        </div>
    );
};