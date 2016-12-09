import {
  API_URL_SIGNIN,
  API_URL_SIGNUP,
  API_URL_USER
} from './../Constants';
import $ from 'jquery';

var auth = {
  
  login: function(params, callback) {
    if (localStorage.token) {
      if (callback) callback(true);
      this.onChange(true);
      return;
    }

    $.post(API_URL_SIGNIN, { user: params }, (function(_this) {
      return function(data) {
        if (data.authenticated) {
          localStorage.token = data.user[0].api_key;
          callback(true);
        } else {
          callback(false, data.error);
        }
      };
    })(this), 'JSON');
  },

  getToken: function() {
    return localStorage.token;
  },

  logout: function(callback) {
    delete localStorage.token;
    if (callback) callback();
    this.onChange(false);
  },

  loggedIn: function() {
    return !!localStorage.token;
  },

  getUser: function(token) {
    if(!!localStorage.token) {
      $.ajax({
        url: API_URL_USER + token,
        headers: { 'Authorization':'Token ' + token },
        async: false,
        dataType: 'json',
        success: function(data) {
          localStorage.email = data.user.email;
        }
      });
    }
  },

  getEmail: function() {
    return localStorage.email;
  },

  register: function(params, callback) {
    $.post(API_URL_SIGNUP, { user: params }, (function(_this) {
      return function(data) {
        if (data.registered) {
          callback(true);
        } else {
          callback(false, data.error);
        }
      };
    })(this), 'JSON');
  },

  onChange() {}
}

module.exports = auth;