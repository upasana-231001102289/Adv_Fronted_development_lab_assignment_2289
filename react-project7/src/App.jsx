import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";
//import "./App.css";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      header: "Complete React Assignment",
      description:
        "Complete the Task Manager assignment using React Router.",
      priority: "High",
      category: "Academic",
      raisedDate: new Date().toLocaleString(),
      dueDate: "28 Aug 2026",
      status: "Raised"
    },

    {
      id: 2,
      header: "Buy Puja Clothes",
      description:
        "Purchase new clothes for Durga Puja.",
      priority: "Medium",
      category: "Personal",
      raisedDate: new Date().toLocaleString(),
      dueDate: "28 Aug 2026",
      status: "Pending"
    }
  ]);

  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* PROTECTED ROUTES */}
        <Route
          element={
            <ProtectedRoute>
              <Navbar />
              <Outlet />
            </ProtectedRoute>
          }
        >

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <Dashboard
                tasks={tasks}
              />
            }
          />

          {/* Tasks */}
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          {/* Add Task */}
          <Route
            path="/add-task"
            element={
              <AddTask
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          {/* Edit Task */}
          <Route
            path="/add-task/:id"
            element={
              <AddTask
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          {/* Task Details */}
          <Route
            path="/tasks/:id"
            element={
              <TaskDetails
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          {/* Completed Tasks */}
          <Route
            path="/completed"
            element={
              <CompletedTasks
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

        </Route>

        {/* DEFAULT */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" />}
        />

        {/* INVALID URL */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;