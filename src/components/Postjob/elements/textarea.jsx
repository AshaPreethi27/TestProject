import { filledInputClasses } from "@mui/material";
import React from "react";

const Textarea = ({ field_id, field_label, field_placeholder }) => {
  return (
    <div className="textarea-grid">
      <p className="input-label" htmlFor={field_id}>
        {field_label}
      </p>
      <textarea
        className="textarea-input"
        id={field_id}
        placeholder={field_placeholder}
      />
    </div>
  );
};

export default Textarea;
