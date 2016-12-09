import React from 'react';
import { Link } from 'react-router';
import auth from './lib/Auth';
import './Home.css';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    auth.getUser(auth.getToken());
  }

  render() {
    return (
      <div className="ui container">
        <h1>Welcome to react-rails-api App</h1>
        <h3>
        	Congratulations! <br />
        	You're logged as <span>{auth.getEmail()}</span> | <Link to="/logout">logout</Link>
      	</h3>
      </div>
    );
  }

};

export default Home;
