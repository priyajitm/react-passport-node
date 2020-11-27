import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Style.css';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import { Fragment, useContext } from 'react';
import ForgotPassword from './views/ForgotPassword';
import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';
import DashboardView from './views/DashboardView';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { error } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route path="/register" component={SignupView} />
            <Route path="/passwordreset" component={ForgotPassword} />
            <ProtectedRoute path="/dashboard" component={DashboardView} />
          </Switch>
        </Fragment>
      </Router>
    </GlobalProvider>
  );
}

export default App;
