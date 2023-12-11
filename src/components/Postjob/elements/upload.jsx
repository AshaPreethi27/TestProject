import React from "react";
import "./styles.css";
import { BsCheckCircleFill, BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";

export default function Upload({ field_label, field_id, field_description }) {
  return (
    <div className="textarea-grid">
      <p className="input-label">{field_label}</p>
      <div className="row-input">
        <input type="file" className="file" />
        <div className="pdf">
          <div style={{ display: "flex" }}>
            <FaFilePdf />
            <p>office view.pdf</p>
          </div>
          <div style={{ display: "flex" }}>
            <BsCheckCircleFill color="green" />
            <AiOutlineDelete color="red" />
          </div>
        </div>
      </div>
    </div>
  );
}
