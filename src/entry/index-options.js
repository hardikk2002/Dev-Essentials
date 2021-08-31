import React from "react";
import { render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import Options from "../components/Options.js";

render(
  <Auth0Provider
    domain="dev-essentials.us.auth0.com"
    clientId="cpdKLT0mnEQtlF7Lyj5a3L96vamSIk5W"
    redirectUri="chrome-extension://jnfgkllihlmbgdhlijoiocoigdpjnbfd/options.html"
  >
    {/* window.location.origin */}
    <Options />
  </Auth0Provider>,

  document.querySelector("#options")
);
