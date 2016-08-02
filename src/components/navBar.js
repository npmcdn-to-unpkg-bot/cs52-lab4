import React from 'react';
import { Link } from 'react-router';


// function based "dumb" component with no state
const NavBar = () => {
  return (
    <div>
      <Link to="/">Roblog</Link>
      <Link to="/posts/new">new post</Link>
    </div>
  );
};


export default NavBar;
