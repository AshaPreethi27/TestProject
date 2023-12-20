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

      // Ensure FB object is available before using it
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
      // Ensure FB object is available before calling login
      if (window.FB) {
        const response = await window.FB.login();
        console.log('User logged in:', response);
      } else {
        console.error('Facebook SDK not available.');
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
