import React from 'react';
import { Link } from '@reach/router';

function Layout({ children }) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          DSA Surveys
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/createsurvey">
                Create Survey
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/editprofile">
                Edit Profile
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/signin">
                Sign-In
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/signup">
                Sign-Up
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/surveylist">
                Survey List
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/takesurvey">
                Take Survey
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/userhome">
                User Homepage
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container">{children}</main>
      <footer>Denim Skeletons rule</footer>
    </React.Fragment>
  );
}

export default Layout;
