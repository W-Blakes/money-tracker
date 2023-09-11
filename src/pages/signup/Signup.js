import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

//styles
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, isPending, error } = useSignup();

  const handleSubmit = function (e) {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <div>
      <form className={styles['signup-form']}>
        <h2>Signup</h2>

        <label>
          <span>Email</span>
          <input
            type={'email'}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
        </label>

        <label>
          <span>Password</span>
          <input
            type={'password'}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          ></input>
        </label>

        <label>
          <span>Display Name</span>
          <input
            type={'text'}
            autoComplete="name"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            required
          ></input>
        </label>

        {!isPending && (
          <button className="btn" onClick={handleSubmit}>
            Signup
          </button>
        )}
        {error && <p>{error}</p>}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}
