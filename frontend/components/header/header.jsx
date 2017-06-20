import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <section>
        <h2>WELCOME, {`${ currentUser.username.toUpperCase() }`}</h2>
        <button onClick={ logout }>Log Out</button>
      </section>
    );
  } else {
    return (
      <section>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </section>
    );
  }
};

export default Header;
