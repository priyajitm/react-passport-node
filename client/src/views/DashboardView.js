import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function DashboardView() {
  const { user, dashboard, logOut } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    dashboard(history);
  }, []);

  const handleLogout = () => {
    logOut(history);
  };

  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <h4>Your email is {user.email}</h4>
      <h4>Your account is registered on {user.registeredOn}</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardView;
