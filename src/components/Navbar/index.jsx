import "./styles.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();

  // const logoutWithRedirect = () => {
  //   console.log("logout"); 
  //   logout({
  //     logoutParams: {
  //       returnTo: window.location.origin,
  //     },
  //   });
  // };

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/736x/2b/38/d9/2b38d9185d83179caf7a03193d94f9d2.jpg"
          className="company-logo"
          alt="logo"
        />
      </div>
      
      <div className="titles-container">
        <p className="navbar-titles">Home</p>
        <Link to="/dashboard">
          <p className="navbar-titles">Dashboard</p>
        </Link>
        <Link to="/postjob">
          <p className="navbar-titles">Post A Job</p>
        </Link>
        <p className="navbar-titles">Candidates</p>
        <p className="navbar-titles">About Us</p>
        <p className="navbar-titles">Contact Us</p>
      </div>
      <div>
        {isAuthenticated ? 
        (<button onClick={handleLogout}>Log Out</button>) :
        ( <button onClick={() => loginWithRedirect()}>Log In</button> ) }
      </div>
      <div className="navbar-profile">
        <p className="person-name">{user?.name}</p>
        <img
          src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          alt="pro-pic"
          className="pro-pic"
        />
        <IoMdNotificationsOutline size={24} className="bell-icon" />
      </div>
    </div>
  );
}

export default Navbar;
