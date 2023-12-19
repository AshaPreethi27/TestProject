import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
  <Auth0Provider
    domain="dev-4jf7lwtlqisur13h.us.auth0.com"
    clientId="fxm1RMrcnIY0u3vyEC6T9zxL2c1nVRLg"
    authorizationParams={{
      redirect_uri: window.location.origin,
     
    }}
    scope='openid email profile'
  >
    <App />
    </Auth0Provider>
  </BrowserRouter>
  </React.StrictMode>
);
