import "./styles.css";
import React,{useEffect} from "react";
import LeftColumn from "../LeftColumn";
import Analytics from "../Analytics";
import MyCandidates from "../MyCandidates";
import MyJobs from "../MyJobs";


function Dashboard() {
  const loadFacebookSDK = () => {
    return new Promise((resolve) => {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '868396208106445',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v12.0',
        });
        resolve();
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });
  };

  useEffect(() => {
    if (!window.FB) {
      loadFacebookSDK().then(() => {
        console.log('Facebook SDK loaded.');
        window.FB.init({
          appId: '868396208106445',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v12.0',
        });
      });
    } else {
      console.log('Facebook SDK already available.');
    }
  }, []);

  const handleFacebookLogin = async () => {
    try {
      const response = await window.FB.login();
      if (response.authResponse) {
        console.log('User is already logged in:', response);
      } else {
        console.log('User logged in:', response);
      }
    } catch (error) {
      console.error('Facebook login error:', error);
    }
  };

  const handleFacebookLogout = async () => {
    try {
      const response = await window.FB.logout();
      console.log('User logged out:', response);
    } catch (error) {
      console.error('Facebook logout error:', error);
    }
  };
  
  return (
    <div className="body-container">
      <LeftColumn className="left-container" />
       <div className="middle-container">
       <button onClick={handleFacebookLogin} >Login with Facebook</button>
       <button onClick={handleFacebookLogout}>Logout</button>
       {/* <p>{response?.name}</p>
       <p>{response?.email}</p> */}
       </div>
    </div>
  );
}

export default Dashboard;
