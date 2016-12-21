import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Demo extends Component {
  render() {
    return (
    <div>
      <h1>Hello Demo</h1>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
    </div>
    );
  }
}
