import React from 'react';
import { Link } from 'react-router';
import auth from './lib/Auth';
import './App.css';

const App = React.createClass({
  
  getInitialState: function() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth: function(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function() {
    auth.onChange = this.updateAuth;
    auth.login();
  },

  render: function() {
    return (
      <div>
        <div className="radius-0 ui mini menu inverted">
          <Link to="/" className="active item">
            <i className="home icon"></i>
          </Link>
          <div className="right menu">
            <div className="item">
              {this.state.loggedIn || <Link to="/signup" className="ui primary button">Sign Up</Link>}
            </div>
          </div>
        </div>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
    );
  }

});

export default App;
