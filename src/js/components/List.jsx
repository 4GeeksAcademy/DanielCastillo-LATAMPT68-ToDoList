import React, { useState } from "react";

export const List = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    function addTodo() {
        if (input.trim() === "") return;

        setTodos([...todos, input]);
        setInput("");
    }

    function removeTodo(indexToRemove) {
        const updatedList = todos.filter((_, index) => index !== indexToRemove);
        setTodos(updatedList);
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div style={{ width: "400px" }}>
                <h1 className="text-center text-muted">To Do's List</h1>

                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") addTodo();
                    }}
                />

                <ul className="list-group">
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {todo}
                            <span
                                style={{ cursor: "pointer", color: "red" }}
                                onClick={() => removeTodo(index)}
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="text-muted mt-2">
                    {todos.length === 0
                        ? "Once you add a task, will appear here!"
                        : `${todos.length} item left`}
                </div>
            </div>
        </div>
    );
};