import React from "react";

const ConfirmationDialog = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <hr></hr>
      <div className="confirmationButtonsDiv">
      <button onClick={onCancel}  className="onCancelButton"> <i class="fa-solid fa-ban"></i> Cancel</button>
      <button onClick={onConfirm} className="onConfirmButton"> <i class="fa-regular fa-thumbs-up"></i> Confirm</button></div>
    </div>
  );
};

export default ConfirmationDialog;
