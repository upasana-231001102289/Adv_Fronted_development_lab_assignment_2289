import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div className="employee-list">

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}

    </div>
  );
}

export default EmployeeList;