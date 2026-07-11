function EmployeeCard({
  employee,
  deleteEmployee,
  editEmployeeData,
}) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>

      <p>
        <strong>Role:</strong> {employee.role}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <div className="button-group">
        <button
          className="edit-btn"
          onClick={() => editEmployeeData(employee)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;