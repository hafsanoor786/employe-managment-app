import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  deleteEmployee,
  editEmployeeData,
}) {
  if (employees.length === 0) {
    return <h3>No Employees Added Yet</h3>;
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          editEmployeeData={editEmployeeData}
        />
      ))}
    </div>
  );
}

export default EmployeeList;