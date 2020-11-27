import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="main">
      <form className="form" action="">
        <div className="form-header">
          <h3>Reset Your Password</h3>
          <p>Enter your registered email below</p>
        </div>

        <div className="form-group">
          <input type="text" className="form-input" placeholder="email@example.com" />
        </div>

        <div className="form-group">
          <button className="form-button" type="submit">
            Reset password
          </button>
        </div>

        <div className="form-footer">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
