import React from "react";
import "./styles.css";

const Input = ({
  field_id,
  field_label,
  field_type,
  field_placeholder,
  field_value,
}) => {
  return (
    <div className="textarea-grid">
      <div className="row-input">
        <label htmlFor={field_id} className="input-label">
          {field_label}
        </label>
        <input
          type={field_type}
          className="input-el"
          id={field_id}
          placeholder={field_placeholder ? field_placeholder : ""}
          value={field_value}
        />
      </div>
      <div className="hr-underline"></div>
    </div>
  );
};

export default Input;
