import "./styles.css";
import React,{useEffect} from "react";
import LeftColumn from "../LeftColumn";
import Analytics from "../Analytics";
import MyCandidates from "../MyCandidates";
import MyJobs from "../MyJobs";


function Dashboard() {
  useEffect(() => {
    const initializeFacebookSDK = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '868396208106445',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v12.0',
        });
      };

      // Load the SDK asynchronously
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      // Ensure FB object is available before initializing
      if (window.FB) {
        initializeFacebookSDK();
      } else {
        console.error('Facebook SDK not available.');
      }
    };

    initializeFacebookSDK();
  }, []);

  const handleFacebookLogin = async () => {
    try {
      // Check if the user is already logged in
      const { authResponse } = await window.FB.getLoginStatus();
      if (authResponse && authResponse.status === 'connected') {
        console.log('User is already logged in:', authResponse);
      } else {
        // If not logged in, initiate the login
        const response = await window.FB.login();
        console.log('User logged in:', response);
      }
    } catch (error) {
      console.error('Facebook login error:', error);
    }
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
