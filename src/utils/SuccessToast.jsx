import React from "react";

const SuccessToast = ({ successMsg }) => {
  return (
    <div className="toast toast-center toast-middle">
      <div className="alert alert-success">
        <span>{successMsg}</span>
      </div>
    </div>
  );
};

export default SuccessToast;
