import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.logout(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.logout(nextProps);
  }

  logout(params) {
    const { history } = params;
    sessionStorage.setItem("isLogin", "false");
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default withRouter(Logout);