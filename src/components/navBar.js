import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { signoutUser } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let authButton;
    if (this.props.authenticated) {
      authButton = (
        <Link to="/" onClick={this.props.signoutUser}>Sign Out</Link>
      );
    } else {
      authButton = (
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Roblog</Link>
        <Link to="/posts/new">New Post</Link>
        {authButton}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(NavBar);
