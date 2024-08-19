import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-nzy2zfuw60rw8bo7.eu.auth0.com"
    clientId="UAhCxkLDhFM3qL4vNkVPuAtBmx3C0K8n"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {" "}
    <App />
  </Auth0Provider>
);

