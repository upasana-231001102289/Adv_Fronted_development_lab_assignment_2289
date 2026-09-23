import { useState } from "react";

import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Ananya Roy",
      rollNumber: "BCA001",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 9.2,
    },
    {
      name: "Rahul Ghosh",
      rollNumber: "BCA002",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.5,
    },
    {
      name: "Priya Sen",
      rollNumber: "BCA003",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 9.6,
    },
    {
      name: "Arjun Majumdar",
      rollNumber: "BCA004",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 7.9,
    },
     {
      name: "Subhadeep Yadav",
      rollNumber: "BCA005",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 9.12,
    },
    {
      name: "Sneha Ghosh",
      rollNumber: "BCA006",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.9,
    }
  ]);

  // Sort students by CGPA
  const sortByCGPA = () => {
    const sortedStudents = [...students].sort(
      (a, b) => b.cgpa - a.cgpa
    );

    setStudents(sortedStudents);
  };

  return (
    <div className="app">
      <Header title="Student Information Portal" />

      <main>
        <div className="heading-section">
          <h2>Student Information</h2>

          <button onClick={sortByCGPA}>
            Sort by CGPA
          </button>
        </div>

        <StudentList students={students} />
      </main>

      <Footer text="Student Information Portal" />
    </div>
  );
}

export default App;