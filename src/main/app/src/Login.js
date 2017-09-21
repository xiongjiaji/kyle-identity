import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Qs from 'qs';
import './App.css';
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:8899/";
    var self = this;
    var payload = Qs.stringify({
      "username": this.state.username,
      "password": this.state.password
    });
    var header = "{headers:{'Content-Type':'application/x-www-form-urlencoded'}}";
    axios.post(apiBaseUrl + 'login', payload, header)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          sessionStorage.setItem("isLogin", "true");
          self.props.history.push("/dashboard");
          console.log("Login successfull");
          var uploadScreen = [];
          alert("Login Successfully");
          self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen });
        }
        else if (response.status == 204) {
          console.log("Username password do not match");
          alert("username password do not match");
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default withRouter(Login);