import "./styles.css";
import React,{useEffect} from "react";
import LeftColumn from "../LeftColumn";
import Analytics from "../Analytics";
import MyCandidates from "../MyCandidates";
import MyJobs from "../MyJobs";


function Dashboard() {
  window.fbAsyncInit = function() {
    window.FB.init({
      appId: '868396208106445',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v12.0', // Specify the version you want to use
    });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};

const Main = () => {
  useEffect(() => {
    initializeFacebookSDK();
  }, []);

  // Handle Facebook login
  const handleFacebookLogin = (response) => {
    console.log(response);
    // Handle the login response here
  };
  return (
    <div className="body-container">
      <LeftColumn className="left-container" />
       <div className="middle-container">
       <button onClick={handleFacebookLogin} >Login with Facebook</button>
       </div>
    </div>
  );
}

export default Dashboard;
