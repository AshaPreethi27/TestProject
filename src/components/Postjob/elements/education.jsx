import React from "react";
import "./styles.css";

const Education = ({ field_id, field_label, field_options }) => {
  return (
    <div className="grid-2">
      <p className="input-label">{field_label}</p>
      <div className="skills-bg" id={field_id}>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <p id={option.id} key={i} className="skills">
              {option.title}{" "}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Education;
