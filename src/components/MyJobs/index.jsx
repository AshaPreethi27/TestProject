import "./styles.css";
import { FiShare2 } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

function MyJobs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginLeft: "10px",
      }}
    >
      <div className="dashboard-bg">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "93%",
            marginBottom: "0px",
          }}
        >
          <p className="head">My Jobs</p>
          <div style={{ display: "flex" }}>
            <select className="dropdown">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
            <select className="dropdown">
              <option>UI UX Designer</option>
              <option>Store Manager</option>
              <option>Project Manager</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          marginTop: "10px",
          marginLeft: "10px",
          marginRight: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="col-heads-bg">
          <p className="col-head" style={{ width: "15%" }}>
            Title
          </p>
          <p className="col-head" style={{ width: "20%" }}>
            Category
          </p>
          <p className="col-head" style={{ width: "11%" }}>
            Type
          </p>
          <p className="col-head" style={{ width: "11%" }}>
            Date
          </p>
          <p className="col-head" style={{ width: "13%" }}>
            Openings
          </p>
          <p className="col-head" style={{ width: "10%" }}>
            Applications
          </p>
          <p className="col-head" style={{ width: "10%" }}>
            Status
          </p>
          <p className="col-head" style={{ width: "10%" }}>
            Action
          </p>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Sr. UI UX Designer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Full Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            57
          </p>
          <p className="role" style={{ width: "10%" }}>
            12 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#027a6c" }}>
            Active
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div
          className="company-rows"
          style={{ borderColor: "#e8be36", borderStyle: "solid" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Frontend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Part Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            10
          </p>
          <p className="role" style={{ width: "10%" }}>
            9 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#f1d271" }}>
            on Hold
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Backend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Freelancer
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            8
          </p>
          <p className="role" style={{ width: "10%" }}>
            6 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#a0a0a0" }}>
            Inactive
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Sr. UI UX Designer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Full Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            57
          </p>
          <p className="role" style={{ width: "10%" }}>
            12 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#027a6c" }}>
            Active
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div
          className="company-rows"
          style={{ borderColor: "#e8be36", borderStyle: "solid" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Frontend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Part Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            10
          </p>
          <p className="role" style={{ width: "10%" }}>
            9 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#f1d271" }}>
            on Hold
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Backend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Freelancer
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            8
          </p>
          <p className="role" style={{ width: "10%" }}>
            6 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#a0a0a0" }}>
            Inactive
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Sr. UI UX Designer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Full Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            57
          </p>
          <p className="role" style={{ width: "10%" }}>
            12 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#027a6c" }}>
            Active
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div
          className="company-rows"
          style={{ borderColor: "#e8be36", borderStyle: "solid" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Frontend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Part Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            10
          </p>
          <p className="role" style={{ width: "10%" }}>
            9 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#f1d271" }}>
            on Hold
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Backend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Freelancer
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            8
          </p>
          <p className="role" style={{ width: "10%" }}>
            6 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#a0a0a0" }}>
            Inactive
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Sr. UI UX Designer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Full Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            57
          </p>
          <p className="role" style={{ width: "10%" }}>
            12 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#027a6c" }}>
            Active
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div
          className="company-rows"
          style={{ borderColor: "#e8be36", borderStyle: "solid" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Frontend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Part Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            10
          </p>
          <p className="role" style={{ width: "10%" }}>
            9 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#f1d271" }}>
            on Hold
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Backend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Freelancer
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            8
          </p>
          <p className="role" style={{ width: "10%" }}>
            6 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#a0a0a0" }}>
            Inactive
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Sr. UI UX Designer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Full Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            57
          </p>
          <p className="role" style={{ width: "10%" }}>
            12 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#027a6c" }}>
            Active
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div
          className="company-rows"
          style={{ borderColor: "#e8be36", borderStyle: "solid" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Frontend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Part Time
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            10
          </p>
          <p className="role" style={{ width: "10%" }}>
            9 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#f1d271" }}>
            on Hold
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
        <div className="company-rows">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p className="company-name">Backend Developer</p>
            <p className="location">California</p>
          </div>
          <p className="role" style={{ width: "20%" }}>
            IT(Information Technology)
          </p>
          <p className="role" style={{ width: "10%" }}>
            Freelancer
          </p>
          <p className="role" style={{ width: "12%" }}>
            24/09/2022
          </p>
          <p className="role" style={{ width: "12%" }}>
            8
          </p>
          <p className="role" style={{ width: "10%" }}>
            6 Applied
          </p>
          <li className="role" style={{ width: "10%", color: "#a0a0a0" }}>
            Inactive
          </li>
          <div className="action" style={{ width: "11%" }}>
            <FiShare2 className="icon-share" size={25} />
            <BsThreeDots className="icon-share" size={30} color={"#cecece"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJobs;
