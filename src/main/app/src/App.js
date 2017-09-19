import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';
import Loginscreen from './Loginscreen';
import { Link } from 'react-router-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }

  // componentWillMount() {
  //   var loginPage = [];
  //   loginPage.push(<Loginscreen parentContext={this} />);
  //   this.setState({
  //     loginPage: loginPage
  //   })
  // }

  render() {
    return (
      <div className="App">
        <ul role="nav">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
        </ul>
        {/* {this.state.loginPage}
        {this.state.uploadScreen} */}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;