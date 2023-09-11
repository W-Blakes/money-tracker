import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

//styles
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleSubmit = function (e) {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <form className={styles['login-form']}>
        <h2>Login</h2>
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

        {error && <p>{error}</p>}
        {!isPending && (
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
        )}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}
