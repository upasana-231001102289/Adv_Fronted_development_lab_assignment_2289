import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <section className="student-list">

      {students.map((student) => (
        <StudentCard
          key={student.rollNumber}
          name={student.name}
          rollNumber={student.rollNumber}
          department={student.department}
          semester={student.semester}
          cgpa={student.cgpa}
        />
      ))}

    </section>
  );
}

export default StudentList;