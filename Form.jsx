import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Form = ({ isOpen, onRequestClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some((value) => !value);

    if (isAnyFieldEmpty) {
      console.log("Please fill in all fields.");
    } else {
      onSubmit(formData);
      setFormData(initialValues);
    }
  };

  return (
    <Modal className={"modal"} isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <button
          className="closeButton"
          onClick={onRequestClose}
          onRequestClose={onRequestClose}
          style={{ textAlign: "right", right: 10, position: "absolute" }}
        >
          X
        </button>
        <form onSubmit={handleSubmit}>
          <p>Enter Details</p>
          <hr />
          <label>
            Employee name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </label>
          <br />
          <label>
            Employee Number:
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <p style={{ color: "red" }}>{errors.number}</p>}
          </label>
          <br />
          <label>
            Employee Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            {errors.role && <p style={{ color: "red" }}>{errors.role}</p>}
          </label>
          <br />
          <label>
            Employee Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
            <br />
          </label>
          <button
            type="submit"
            className="submitButton"
            onKeyDown={handleKeyDown}
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Form;
