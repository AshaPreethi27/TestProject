import "./styles.css";
import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";

function Navbar() {
  // const {
  //   loginWithRedirect,
  //   isAuthenticated,
  //   logout,
  //   user,
  //   getAccessTokenSilently,
  //   getIdTokenClaims
  // } = useAuth0();

  // const handleLogout = () => {
  //   logout({
  //     returnTo: window.location.origin,
  //   });
  // };

  // const sendUserDataToBackend = async () => {
  //   try {
  //     const accessToken = await getAccessTokenSilently();
  //     const originalData = user.sub;
  //     const parts = originalData.split("|");
  //     const extractedData = parts[1];
  //     let platform;
  //     if (user?.sub.includes("google")) {
  //       platform = "G";
  //     } else if (user?.sub.includes("facebook")) {
  //       platform = "F";
  //     } else if (user?.sub.includes("linkedin")) {
  //       platform = "L";
  //     } else {
  //       platform = "G";
  //     }
  //     const email = user?.email || "";
  //     const response = await fetch(
  //       "https://paymentsapi.mindwavetech.com/api/users/social_signup",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         body: JSON.stringify({
  //           first_name: user.name,
  //           last_name: null,
  //           email: email,
  //           password: null,
  //           mobileNumber: null,
  //           platform: platform,
  //           platform_id: extractedData,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       // Handle success, if needed
  //       console.log("User data sent to backend successfully");
  //     } else {
  //       // Handle error response
  //       console.error("Failed to send user data to backend");
  //     }
  //   } catch (error) {
  //     console.error("Error sending user data to backend", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (isAuthenticated && user) {
  //       try {
  //         const idTokenClaims = await getIdTokenClaims();

  //         // Check the claims, especially the 'email' field
  //         console.log(idTokenClaims);
  //         const email = idTokenClaims.email;
  //       console.log('User email:', email);
  //       } catch (error) {
  //         console.error("Error fetching ID token claims:", error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [isAuthenticated, user, getIdTokenClaims]);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/736x/2b/38/d9/2b38d9185d83179caf7a03193d94f9d2.jpg"
          className="company-logo"
          alt="logo"
        />
        {/* <button onClick={sendUserDataToBackend}>Send</button> */}
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
      {/* <div>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div> */}

      {/* <LoginSocialFacebook
        appId="868396208106445"
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log("Login failed:", error);
        }}
        redirect_uri="https://test-project-six-zeta.vercel.app/"
      >
        <FacebookLoginButton />
      </LoginSocialFacebook> */}
         <LoginSocialFacebook
          appId="868396208106445"
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          redirect_uri="https://test-project-six-zeta.vercel.app/dashboard"
          onResolve={(response) => {
            console.log(response)
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

      <div className="navbar-profile">
        {/* <p className="person-name">{user?.name}</p>
        <p>{user?.email}</p>
        {isAuthenticated ? console.log(user) : ""} */}
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
