import "./styles.css";
import { useEffect ,useState} from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import {  useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect,isAuthenticated,logout,user,getAccessTokenSilently } = useAuth0();
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
 
  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };


  const sendUserDataToBackend = async (userData, accessToken) => {
    try {
      const response = await fetch('https://paymentsapi.mindwavetech.com/api/users/social_signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle success, if needed
        console.log('User data sent to backend successfully');
      } else {
        // Handle error response
        console.error('Failed to send user data to backend');
      }
    } catch (error) {
      console.error('Error sending user data to backend', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && user) {
        try {
          // Get the access token
          const accessToken = await getAccessTokenSilently();
          console.log(accessToken);
          // Make an authenticated request to your backend API
          const backendResponse = await fetch('https://paymentsapi.mindwavetech.com/api/users/social_signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          if (backendResponse.ok) {
            const backendData = await backendResponse.json();
            setApiData(backendData);
            sendUserDataToBackend({
              first_name: user.name,
              last_name: null,
              email: user.email,
              password: null,
              mobileNumber: null,
              platform: "G",
              platform_id: user.sub,
            }, accessToken);
          } else {
            setError('Failed to fetch data from the backend API');
          }

        } catch (error) {
          console.error("Error in fetching data:", error.message);
          console.log(error.message)
          setError('Error getting access token or fetching data');
        }
      }
    };

    fetchData();
  }, [isAuthenticated, user, getAccessTokenSilently]);


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
        <p>{user?.email}</p>
        {isAuthenticated ? console.log(user):""}
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
