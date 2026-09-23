import { useEffect, useState } from "react";

function EmployeeForm({ onAdd, onUpdate, editingEmployee }) {

  const initialState = {
    name: "",
    employeeId: "",
    department: "",
    gender: "",
    phone: "",
    localAddress: "",
    permanentAddress: "",
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData(initialState);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.employeeId ||
      !formData.department ||
      !formData.gender ||
      !formData.phone ||
      !formData.localAddress ||
      !formData.permanentAddress
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (editingEmployee) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }

    setFormData(initialState);
  };

  return (
    <div className="form-container">

      <h2>
        {editingEmployee ? "✏️ Edit Employee" : "➕ Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department Name"
          value={formData.department}
          onChange={handleChange}
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="localAddress"
          placeholder="Local Address"
          value={formData.localAddress}
          onChange={handleChange}
        />

        <textarea
          name="permanentAddress"
          placeholder="Permanent Address"
          value={formData.permanentAddress}
          onChange={handleChange}
        />

        <button type="submit">
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>

      </form>
    </div>
  );
}

export default EmployeeForm;