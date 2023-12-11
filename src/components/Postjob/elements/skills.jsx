import React from "react";
import "./styles.css";

const Skills = ({ field_id, field_label, field_options, field_head }) => {
  return (
    <div className="textarea-grid">
      <p className="input-label">{field_label}</p>
      <p className="input-label">{field_head}</p>
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

export default Skills;
