import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Register extends Component {
  render() {
    return (
    <div>
      <h1>Hello Register</h1>
      <Link to="/login">Login</Link>
    </div>
    );
  }
}
