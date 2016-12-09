import React from 'react';
import { Link } from 'react-router';
import auth from './lib/Auth';

const Logout = React.createClass({
  
  componentDidMount: function() {
    auth.logout();
  },

  render: function() {
  	return (
      <div className="ui container">
        <h1>You are now logged out.</h1>
        <p><Link to="/">Back to Home Page</Link></p>
      </div>
    );
  }

});

export default Logout;