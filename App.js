import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faList,
  faChartBar,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import Table from "./Table";
import ConfirmationDialog from "./ConfirmationDialog";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    if (editingEmployee) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === editingEmployee.id
            ? { ...employee, ...formData }
            : employee
        )
      );
      setEditingEmployee(null);
    } else {
      setEmployees((prevEmployees) => [
        ...prevEmployees,
        { id: Date.now(), ...formData },
      ]);
    }

    setShowForm(false);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = (employeeId) => {
    setDeleteEmployeeId(employeeId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== deleteEmployeeId)
    );
    setDeleteEmployeeId(null);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setDeleteEmployeeId(null);
    setShowDeleteConfirmation(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  return (
    <div>
      <div className="navbar">
        <FontAwesomeIcon icon={faHome} className="Home" />
        <FontAwesomeIcon icon={faUser} className="user" />
        <FontAwesomeIcon icon={faList} className="list" />
        <FontAwesomeIcon icon={faChartBar} className="analytics" />
        <FontAwesomeIcon icon={faCog} className="settings" />
      </div>
      <div className="headingTag">
        <FontAwesomeIcon icon={faUser} />
        <h1>Employee data</h1>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <button onClick={handleEnrollClick} className="enrollButton">
        <i className="fa-regular fa-square-check"></i> Enroll
      </button>
      <Form
        isOpen={showForm}
        onRequestClose={handleFormCancel}
        onSubmit={handleFormSubmit}
        initialValues={editingEmployee || {}}
      />
      <Table
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showDeleteConfirmation && (
        <ConfirmationDialog
          message="Are you sure you want to delete this employee?"
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default App;
