import "./styles.css";
import {IoMdNotificationsOutline} from "react-icons/io";

function Navbar () {
    return(
        <div className="navbar">
            <div className="logo-container">
            <img src="https://i.pinimg.com/736x/2b/38/d9/2b38d9185d83179caf7a03193d94f9d2.jpg" className="company-logo" alt="logo" />
            </div>
            <div className="titles-container">
            <p className="navbar-titles">Home</p>
            <p className="navbar-titles">Dashboard</p>
            <p className="navbar-titles">Post A Job</p>
            <p className="navbar-titles">Candidates</p>
            <p className="navbar-titles">About Us</p>
            <p className="navbar-titles">Contact Us</p>
            </div>
            <div className="navbar-profile">
                <p className="person-name">Sharat Chandra</p>
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="pro-pic" className="pro-pic"  />
                <IoMdNotificationsOutline size={24} className="bell-icon" />
            </div>
        </div>
    )
}

export default Navbar;