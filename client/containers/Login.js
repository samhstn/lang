import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  render() {
    return (
    <div>
      <h1>Hello Login</h1>;
      <Link to="/demo">Demo</Link>
      <Link to="/register">Register</Link>
    </div>
    );
  }
}
