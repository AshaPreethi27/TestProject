import "./styles.css";
import { FcGoogle } from "react-icons/fc";

function Profile() {
  return (
    <div className="profile-container">
      <div className="person-container">
        <FcGoogle className="icon" size={35} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <h5 className="company-name">Google LLC.</h5>
          <h5 className="designation">HR Manager</h5>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          marginLeft: "5px",
        }}
      >
        <p className="profile-stat-name">Profile completed (Excellent)</p>
        <p className="stat-percent">92%</p>
      </div>
      <div className="profile-status">
        <div className="status"></div>
      </div>
    </div>
  );
}

export default Profile;
