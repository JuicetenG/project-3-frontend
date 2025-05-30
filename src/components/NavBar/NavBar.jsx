// src/components/NavBar/NavBar.jsx
import { useContext } from "react";
import { Link } from "react-router";
import './NavBar.css'

import { UserContext } from "../../contexts/UserContext";


const NavBar = ({ setCurrentProject }) => {
    // Pass the UserContext object to the useContext hook to access:
  // - The user state (which we use here).
  // - The setUser function to update the user state (which we aren't using).
  //
  // Destructure the object returned by the useContext hook for easy access
  // to the data we added to the context with familiar names.
  const { user, setUser } = useContext(UserContext)

  function handleSignOut(){
    // destroy the token! 
    localStorage.removeItem('token')
    // clearing out our state
    setUser(null)
    setCurrentProject(null)
  }

  function handleDashboardClick(){
    setCurrentProject(null)
  }

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-container">
          {/* Left Section - CODE_tracker */}
          <div className="nav-left">
            <span className="nav-title">
              <span className="code">CODE</span>
              .tracker(<span className="check">&#10003;</span>)
            </span>
          </div>
          {/* Right Section - Dashboard & Sign Out OR Home, Sign In, Sign Up */}
          <div className={`nav-right ${user ? "signed-in" : "not-signed-in"}`}>
            {user ? (
              <>
                <Link to="/" className="nav-dashboard" onClick={handleDashboardClick}>Dashboard</Link>
                <button className="nav-signout" onClick={handleSignOut}>Sign Out</button>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

