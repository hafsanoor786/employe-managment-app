import "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  // Load Employees from Local Storage
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [search, setSearch] = useState("");
  const [editEmployee, setEditEmployee] = useState(null);

  // Browser Title
  useEffect(() => {
    document.title = `Employees (${employees.length})`;
  }, [employees]);

  // Save Employees to Local Storage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Add Employee
  const addEmployee = (employee) => {
    const newEmployee = {
      id: Date.now(),
      ...employee,
    };

    setEmployees([...employees, newEmployee]);
    toast.success("Employee Added Successfully!");
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);

    if (editEmployee?.id === id) {
      setEditEmployee(null);
    }

    toast.error("Employee Deleted Successfully!");
  };

  // Edit Employee
  const editEmployeeData = (employee) => {
    setEditEmployee(employee);
  };

  // Update Employee
  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id
        ? updatedEmployee
        : employee
    );

    setEmployees(updatedEmployees);
    setEditEmployee(null);
    setSearch("");

    toast.info("Employee Updated Successfully!");
  };

  // Search Employee
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Employee Management System</h2>

        <p className="employee-count">
          Total Employees: {employees.length}
        </p>

        <input
          type="text"
          placeholder="Search Employee..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <EmployeeForm
          addEmployee={addEmployee}
          editEmployee={editEmployee}
          updateEmployee={updateEmployee}
        />

        <EmployeeList
          employees={filteredEmployees}
          deleteEmployee={deleteEmployee}
          editEmployeeData={editEmployeeData}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
    </>
  );
}

export default App;