import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.text = "You are logout";
  }

  componentWillMount() {
    this.checkAuthentication(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.checkAuthentication(nextProps);
    }
  }

  checkAuthentication(params) {
    const { history } = params;
    if (sessionStorage.getItem("isLogin") == "true") {
        this.props.text = "You are login";
    } else {
      this.props.text = "You are logout";
    }
  }

  render() {
    return (
      <div className="App">
        Dashboard - {this.props.text}.
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default withRouter(Dashboard);