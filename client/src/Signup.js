import React from 'react';
import { Link } from 'react-router';
import auth from './lib/Auth';
import './Signup.css';

const Signup = React.createClass({

  getInitialState: function() {
    return {
      error: false
    }
  },

  handleSubmit: function(event) {
    
    event.preventDefault();

    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value,
      confirm_password: this.refs.confirm_password.value
    };

    auth.register(user, (registered) => {
      if (!registered) return this.setState({ error: true });
      console.log("Register");
      this.props.router.replace('/');
    });

  },

  render: function() {
    return (
      <div className="ui middle aligned center aligned grid">
        
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">
                Sign up
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
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" ref="confirm_password" name="confirm_password" placeholder="Confirm Password" />
                  </div>
                </div>
                <button type="submit" className="ui fluid large teal submit button">Sign up</button>
              </div>
              {this.state.error && (<div className="ui error message"><p>Bad login information</p></div>)}
            </form>
            <div className="ui message">
              Have a user? <Link to="/signin">Signin</Link>
            </div>
          </div>

      </div>
    );
  }

});

export default Signup;