import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function LoginView() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const { setError, error, loginUser } = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill out the fields');
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      )
    ) {
      setError('Enter valid email');
    } else {
      const formData = { username: email, password };
      loginUser(formData, history);
    }
  };

  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h4>Login to Access Your Dashboard</h4>
        </div>

        <div className="form-group form-header">
          <p>Login with</p>
          <button className="social-button">Facebook</button>
          <button className="social-button">Google</button>
          <p>or</p>
        </div>

        <div className="form-header">{error ? error : <p>or</p>}</div>

        <div className="form-group">
          <input
            type="text"
            className="form-input"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="form-group">
          <button className="form-button" type="submit">
            Login
          </button>
        </div>

        <div className="form-footer">
          <Link to="/passwordreset">Forgot Password?</Link>
        </div>

        <div className="form-footer">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginView;
