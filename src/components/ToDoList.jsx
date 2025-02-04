import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <style>
        {`
          /* General Styles */
          body {
            background-color: #1a1a2e;
            font-family: "Arial", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
            margin: 0;
          }

          /* Main Container */
          .todo-container {
            background: #16213e;
            padding: 20px;
            border-radius: 10px;
            width: 350px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            text-align: center;
          }

          /* Input & Button */
          input {
            width: 70%;
            padding: 10px;
            border-radius: 5px;
            border: none;
            outline: none;
            background: #0f3460;
            color: white;
          }

          button {
            background: #e94560;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
          }

          button:hover {
            background: #ff2e63;
          }

          /* Task List */
          ul {
            list-style: none;
            padding: 0;
            margin-top: 15px;
          }

          li {
            background: #1b1b3a;
            padding: 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            transition: 0.3s;
          }

          /* Completed Task (No Line-Through on Delete) */
          .completed span {
            text-decoration: line-through;
            color: #03dac6;
          }

          /* Delete Button - Bigger & Better */
          .delete-btn {
            background: none;
            border: none;
            color: red;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            transition: 0.3s;
          }

          .delete-btn:hover {
            color: darkred;
            transform: scale(1.2);
          }

          /* Task Completion */
          .task-status {
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 5px;
            background: #0f3460;
            color: white;
            transition: 0.3s;
          }

          .task-status:hover {
            background: #1f4068;
          }
        `}
      </style>

      <h2>To-Do List</h2>

      {/* Input & Add Button */}
      <div>
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            {/* Task Text (Line-Through Only if Completed) */}
            <span>{t.task}</span>

            {/* Complete / Incomplete Button */}
            <button className="task-status" onClick={() => toggleTask(index)}>
              {t.completed ? "✔ Done" : "❌ Not Done"}
            </button>

            {/* Delete Button - Bigger & No Line-Through */}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
