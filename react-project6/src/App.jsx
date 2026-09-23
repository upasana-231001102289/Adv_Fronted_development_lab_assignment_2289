import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      header: "Complete React Assignment",
      description:
        "Complete Assignment 6 based on React Router and submit it.",
      priority: "High",
      category: "Academic",
      raisedDate: new Date().toLocaleString(),
      dueDate: "28 Aug 2026",
      status: "Pending"
    },
    {
      id: 2,
      header: "Prepare Java Notes",
      description:
        "Revise OOP concepts and prepare notes for examination.",
      priority: "Medium",
      category: "Academic",
      raisedDate: new Date().toLocaleString(),
      dueDate: "28 Aug 2026",
      status: "Raised"
    },
    {
      id: 3,
      header: "Go for a Walk",
      description:
        "Take some time for outdoor activity.",
      priority: "Low",
      category: "Personal",
      raisedDate: new Date().toLocaleString(),
      dueDate: "28 Aug 2026",
      status: "Closed"
    }
  ]);

  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route path="/login" element={<Login />} />


        {/* Protected Routes */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />

              {/* Nested Routes */}
              <Outlet />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<Dashboard tasks={tasks} />}
          />

          <Route
            path="tasks"
            element={
              <Tasks
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          <Route
            path="add-task"
            element={
              <AddTask
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          {/* Dynamic Route */}

          <Route
            path="tasks/:id"
            element={
              <TaskDetails
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          <Route
            path="completed"
            element={
              <CompletedTasks
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

        </Route>


        {/* Invalid URL */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;