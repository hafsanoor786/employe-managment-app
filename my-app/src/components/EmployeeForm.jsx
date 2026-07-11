import { useState, useEffect } from "react";

function EmployeeForm({
  addEmployee,
  editEmployee,
  updateEmployee,
}) {
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
  });

  // Form ko Edit data se fill karo
  useEffect(() => {
    if (editEmployee) {
      setEmployee(editEmployee);
    }
  }, [editEmployee]);

  // Input Change
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !employee.name ||
      !employee.role ||
      !employee.department ||
      !employee.email
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editEmployee) {
      updateEmployee(employee);
    } else {
      addEmployee(employee);
    }

    // Form Reset
    setEmployee({
      name: "",
      role: "",
      department: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">

      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="role"
        placeholder="Job Role"
        value={employee.role}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={employee.email}
        onChange={handleChange}
      />

      <button type="submit">
        {editEmployee ? "Update Employee" : "Add Employee"}
      </button>

    </form>
  );
}

export default EmployeeForm;