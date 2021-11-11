import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
import config from './OktaConfig';
class Protected extends Component {
  render(){
    return (<h1> Protected HOME</h1>);
  }
}
 
class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer={config.okta.issuer}
          client_id={config.okta.clientId}
          redirect_uri={config.okta.redirectUri}
        >
          <Home></Home>
          <SecureRoute path='/protected' component={Protected}/>
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}
 
export default App;