import "./styles.css";
import { BsArrowLeftShort } from "react-icons/bs";
import "./elements";
import formJSON from "./formElement.json";
import Elements from "./elements";
import { useState, useEffect } from "react";
console.log("formJson", formJSON);

export default function PostJob() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0]);
  }, []);
  const { fields, page_label } = formJSON[0];
  return (
    <div className="post-bg">
      <div className="row-container">
        <BsArrowLeftShort size={20} />
        <p className="back-head">Back</p>
      </div>
      <div className="post-body">
        <form>
          <h1 className="title-name">{page_label}</h1>
          <div className="title-line"></div>

          <div className="form-fields">
            {fields
              ? fields.map((field, i) => <Elements key={i} field={field} />)
              : null}
          </div>
          <div className="row-container">
            <button type="submit" className="btn btn-danger">
              PREVIEW
            </button>
            <button type="submit" className="btn btn-outline-warning">
              KEEP ON H0LD
            </button>
            <button type="submit" className="btn btn-primary">
              PUBLISH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
