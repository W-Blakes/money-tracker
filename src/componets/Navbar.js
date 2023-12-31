import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

//styles
import styles from './Navbar.module.css';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.title}>
            <Link to="/">Money Tracker</Link>
          </li>

          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>hello, {user.displayName}</li>
              <li>
                <button className="btn" onClick={logout}>
                  Logut
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
