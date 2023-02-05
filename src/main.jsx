import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import AuthenticationProvider from "./context/AuthenticationContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1097336008725-uas1po87em3kpka7qsjithkcsrctni9e.apps.googleusercontent.com">
    <React.StrictMode>
      <Router>
        <AuthenticationProvider>
          <App />
        </AuthenticationProvider>
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
