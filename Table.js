import React from "react";

const Table = ({ employees, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>
            {" "}
            <i class="fa-solid fa-user"></i>
            {""} Name
          </th>
          <th>
            {" "}
            <i class="fa-solid fa-phone"></i> Number
          </th>
          <th>
            {" "}
            <i class="fa-solid fa-briefcase"></i> Role
          </th>
          <th>
            {" "}
            <i class="fa-solid fa-house"></i> Address
          </th>
          <th> Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={employee.id}>
            <td>{index + 1}</td>
            <td style={{ textTransform: "capitalize" }}>{employee.name}</td>
            <td> {employee.number}</td>
            <td style={{ textTransform: "capitalize" }} > {employee.role}</td>
            <td style={{ textTransform: "capitalize" }}>{employee.address}</td>
            <td>
                <div className="tableButtons">
                <button className="editButton" onClick={() => onEdit(employee)}>
                {" "}
                <i className="fa-regular fa-pen-to-square "></i>{" "}
              </button>
              <button
                className="deleteButton"
                onClick={() => onDelete(employee.id)}
              >
                {" "}
                <i className="fa-solid fa-trash-can"></i>{" "}
              </button></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
