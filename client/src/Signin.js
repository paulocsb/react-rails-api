import React from 'react';
import { Link } from 'react-router';
import auth from './lib/Auth';
import './Signin.css';

const Signin = React.createClass({

  getInitialState: function() {
    return {
      error: false
    }
  },

  handleSubmit: function(event) {
    
    event.preventDefault();

    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };

    auth.login(user, (loggedIn) => {
      if (!loggedIn) return this.setState({ error: true });

      const { location } = this.props;

      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname);
      } else {
        this.props.router.replace('/');
      }
    });

  },

  render: function() {

    return (
      <div className="ui middle aligned center aligned grid">
        
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">
                Signin
              </div>
            </h2>
            <form className="ui large form" onSubmit={this.handleSubmit}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" ref="email" name="email" placeholder="E-mail address" />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" ref="password" name="password" placeholder="Password" />
                  </div>
                </div>
                <button type="submit" className="ui fluid large teal submit button">Login</button>
              </div>
              {this.state.error && (<div className="ui error message"><p>Bad signup information</p></div>)}
            </form>
            <div className="ui message">
              Create a user? <Link to="/signup">Sign up</Link>
            </div>
          </div>

      </div>
    );
  }

});

export default Signin;