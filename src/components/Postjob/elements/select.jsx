import React from "react";
import "./styles.css";

const Select = ({ field_id, field_label, field_options }) => {
  return (
    <div className="select-field">
      <label htmlFor={field_id} className="option-label">
        {field_label}
      </label>
      <select className="options-bg">
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.options} key={i}>
              {option.options}{" "}
            </option>
          ))}
      </select>
    </div>
  );
  console.log(option);
};
export default Select;
