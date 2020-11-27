import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function SignupView() {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const { setError, error, userRegister } = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill out the fields');
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      )
    ) {
      setError('Enter valid email');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      const formData = { name, email, password };
      userRegister(formData, history);
    }
  };

  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h3>Create an Account</h3>
        </div>

        <div className="form-group">
          <button className="social-button">Facebook</button>
          <button className="social-button">Google</button>
        </div>

        <div className="form-header">{error ? error : <p>or</p>}</div>

        <div className="form-group">
          <input
            type="text"
            className="form-input"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

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
          <input
            type="password"
            className="form-input"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <div className="form-group">
          <button className="form-button" type="submit">
            Sign Up
          </button>
        </div>
        <div className="form-footer">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}
export default SignupView;
