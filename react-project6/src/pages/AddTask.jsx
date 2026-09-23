import { useState } from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";

function AddTask({ tasks, setTasks }) {

  const navigate = useNavigate();

  const { id } = useParams();

  const editingTask = id
    ? tasks.find(
        task => task.id === Number(id)
      )
    : null;

  const [header, setHeader] = useState(
    editingTask?.header || ""
  );

  const [description, setDescription] = useState(
    editingTask?.description || ""
  );

  const [priority, setPriority] = useState(
    editingTask?.priority || "Medium"
  );

  const [category, setCategory] = useState(
    editingTask?.category || "Academic"
  );

  const [dueDate, setDueDate] = useState(
    editingTask?.dueDate || "28 Aug 2026"
  );

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editingTask) {

      const updatedTasks = tasks.map(task =>
        task.id === Number(id)
          ? {
              ...task,
              header,
              description,
              priority,
              category,
              dueDate
            }
          : task
      );

      setTasks(updatedTasks);

      alert("Task updated successfully!");

      navigate(`/tasks/${id}`);

    } else {

      const newTask = {

        id: Date.now(),

        header,

        description,

        priority,

        category,

        raisedDate:
          new Date().toLocaleString(),

        dueDate,

        status: "Raised"
      };

      setTasks([
        ...tasks,
        newTask
      ]);

      alert("Task created successfully!");

      navigate("/tasks");
    }
  };

  return (
    <main className="page">

      <h1>
        {editingTask
          ? "Update Task"
          : "Add New Task"}
      </h1>

      <form
        className="task-form"
        onSubmit={handleSubmit}
      >

        <label>
          Task Header
        </label>

        <input
          type="text"
          value={header}
          onChange={(e) =>
            setHeader(e.target.value)
          }
          placeholder="Enter task title"
          required
        />

        <label>
          Task Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Enter task description"
          required
        />

        <label>
          Priority
        </label>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>
          Category
        </label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>Academic</option>
          <option>Personal</option>
        </select>

        <label>
          Due Date
        </label>

        <input
          type="text"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />

        <button type="submit">
          {editingTask
            ? "Update Task"
            : "Create Task"}
        </button>

      </form>

    </main>
  );
}

export default AddTask;