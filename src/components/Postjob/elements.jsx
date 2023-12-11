import React from "react";
import Input from "./elements/input";
import Textarea from "./elements/textarea";
import RadioInput from "./elements/radio";
import Select from "./elements/select";
import Skills from "./elements/skills";
import Education from "./elements/education";
import Date from "./elements/datecalender";
import BasicTimePicker from "./elements/time";
import Upload from "./elements/upload";

const Elements = ({
  field: {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_options,
    field_name,
    field_head,
  },
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
          field_options={field_options}
        />
      );
    case "radio":
      return (
        <RadioInput
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
          field_name={field_name}
          field_options={field_options}
        />
      );
    case "textarea":
      return (
        <Textarea
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
          field_placeholder={field_placeholder}
        />
      );
    case "skills":
      return (
        <Skills
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
          field_head={field_head}
          field_options={field_options}
        />
      );
    case "education":
      return (
        <Education
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
          field_options={field_options}
        />
      );
    case "date":
      return (
        <Date
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
        />
      );
    case "time":
      return (
        <BasicTimePicker
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
        />
      );
    case "file":
      return (
        <Upload
          field_id={field_id}
          field_label={field_label}
          field_type={field_type}
        />
      );
    default:
      return null;
  }
};
export default Elements;
