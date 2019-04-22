import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleLogin
    clientId="1050862843956-3m82bbd3jf5m4dsfs0skb5lm438juqkt.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
      </div>
    );
  }
}

export default App;
