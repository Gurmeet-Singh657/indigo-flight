// components/Navbar/Navbar.js
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.js";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      console.error("Token Not Found");
    }
  }, []);

  // login through google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = auth.currentUser;
        const token = await user?.getIdToken();
        const email = user.email;
        const name = auth.currentUser.displayName;
        const uid = auth.currentUser.uid;
        setToken(token);
        await axios.post("http://localhost:8081/signup", {
            "id": uid,
            "name": name,
            "email": email
        }, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          }
      });
        localStorage.setItem('token', token);
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          setErrormsg("Google sign-in popup was closed by the user.");
        } else {
          console.log(error);
        }
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        navigate("/");
        setUser(null);
      })
      .catch((error) => {
        console.log("Sign out error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link to="/" className={styles.navbarBrand}>
            AirWave
          </Link>
          <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto align-items-center">
              <NavLink to="/" className={styles.navItem}>
                <span className={styles.navLink}>Home</span>
              </NavLink>
              {user && (
                <NavLink to="/admin" className={styles.navItem}>
                  <span className={styles.navLink}>Admin Dashboard</span>
                </NavLink>
              )}
              {user && (
                <NavLink to="/my-flights" className={styles.navItem}>
                  <span className={styles.navLink}>My Flights</span>
                </NavLink>
              )}
              <div>
                {user ? (
                  <button
                    className={styles.logOutButton}
                    onClick={handleSignOut}
                  >
                    Log Out <i className={`fa fa-sign-out-alt ${styles.icon}`}></i>
                  </button>
                ) : (
                  <button className={styles.signInButton} onClick={signInWithGoogle}>
                    <i className={`fa fa-sign-in-alt ${styles.icon}`}></i> Sign In With Google
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
