function StudentCard({
  name,
  rollNumber,
  department,
  semester,
  cgpa,
  photo
}) {
  return (
    <div className="student-card">

      <div className="student-info">

        <h3>{name}</h3>

        <p>
          <strong>Roll Number:</strong> {rollNumber}
        </p>

        <p>
          <strong>Department:</strong> {department}
        </p>

        <p>
          <strong>Semester:</strong> {semester}
        </p>

        <p className="cgpa">
          <strong>CGPA:</strong> {cgpa}
        </p>

      </div>

    </div>
  );
}

export default StudentCard;