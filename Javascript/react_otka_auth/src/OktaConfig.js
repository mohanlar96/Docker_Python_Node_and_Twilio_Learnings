export default {
  okta: {
    clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
    issuer: process.env.REACT_APP_OKTA_ISSUER,
    redirectUri: `${window.location.origin}/implicit/callback`,
    scope: "openid profile email"
  }
};
