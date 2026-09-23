import { useState } from "react";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rajib Sen",
      employeeId: "EMP101",
      department: "Farming",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Kolkata",
      permanentAddress: "Durgapur",
    },
    {
      id: 2,
      name: "Puja Dasgupta",
      employeeId: "EMP102",
      department: "Accounts",
      gender: "Female",
      phone: "9876501234",
      localAddress: "Howrah",
      permanentAddress: "Siliguri",
    },
      {
      id: 3,
      name: "Shreya Mukherjee",
      employeeId: "EMP103",
      department: "HR",
      gender: "Female",
      phone: "9876501235",
      localAddress: "Hooghly",
      permanentAddress: "Asansol",
    },
      {
      id: 4,
      name: "Priya Chatterjee",
      employeeId: "EMP104",
      department: "Marketing",
      gender: "Female",
      phone: "9876501236",
      localAddress: "Durgapur",
      permanentAddress: "Kolkata",
    },
  ]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Add Employee
  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        id: Date.now(),
      },
    ]);
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // Edit Employee
  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  // Update Employee 
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setEditingEmployee(null);
  };

  // Search + Department Filter
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  const departments = [
    "All",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  return (
    <div className="app">
      <Header />

      <div className="container">

        <div className="top-section">
          <h2>Employee Directory</h2>

          <div className="employee-count">
            Total Employees: <strong>{employees.length}</strong>
          </div>
        </div>

        <EmployeeForm
          onAdd={addEmployee}
          onUpdate={updateEmployee}
          editingEmployee={editingEmployee}
        />

        <div className="filters">

          <input
            type="text"
            placeholder="🔍 Search by name or Employee ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

        </div>

        {filteredEmployees.length === 0 ? (
          <div className="no-result">
            <h3>No Employees Found</h3>
            <p>Try another name, ID or department.</p>
          </div>
        ) : (
          <EmployeeList
            employees={filteredEmployees}
            onDelete={deleteEmployee}
            onEdit={editEmployee}
          />
        )}

      </div>
    </div>
  );
}

export default App;