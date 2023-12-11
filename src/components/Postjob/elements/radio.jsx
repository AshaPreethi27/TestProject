// import React from 'react';
// import "./styles.css";

// const RadioInput = ({ field_id, field_label, field_options,field_name}) => {
//   return (
//         <div>
//                <p className='input-label'>{field_label}</p>
//               {field_options.map((option, i) => (
//                 <div className='radio-bg'>

//               <input value={option.options} type="radio" id={field_id} name={field_name} key={i}  />
//               <label htmlFor={field_id}>{option.options}</label>
//               </div>
//               ))}
//         </div>
//   );
// }

// export default RadioInput;
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./styles.css";

export default function RowRadioButtonsGroup({
  field_id,
  field_name,
  field_label,
  field_options,
}) {
  return (
    <FormControl size={15}>
      <FormLabel id={field_id} className="input-label">
        {field_label}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={field_name}
      >
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <FormControlLabel
              className="radio"
              value={option.options}
              key={i}
              control={<Radio />}
              label={option.options}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}
