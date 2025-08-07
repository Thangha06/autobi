// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter } from "react-router-dom";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_2iRURsKT8",
  client_id: "1g198u2h1v4fo855eij9e7mp7c",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "email openid phone",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// wrap the application with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </AuthProvider>
  </React.StrictMode>
);