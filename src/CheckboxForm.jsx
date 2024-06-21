import React from "react";

const CheckboxForm = ({ checkboxes, handleChange }) => {
  return (
    <>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={checkbox.id}
            onChange={() => handleChange(checkbox.id)}
            checked={checkbox.checked}
          />
          <label className="form-check-label" htmlFor={checkbox.id}>
            Add a chevron segment
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckboxForm;