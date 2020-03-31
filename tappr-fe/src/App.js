import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import UserDashboard from './components/UserDashboard';
import UserProfile from './components/UserProfile';
import UserBrews from './components/UserBrews';
import AddBeer from './components/AddBeer';
import UpdateBeer from './components/UpdateBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TAPPR</h1>
        <RegisterForm />

        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route exact path="/login" render={(props) => <LoginForm {...props} />} />
        <Route exact path="/register" render={(props) => <RegisterForm {...props} />} />
        <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />

        <PrivateRoute path="/my-dashboard" component={UserDashboard} />
        <PrivateRoute path="/my-profile/:id" component={UserProfile} />
        <PrivateRoute path="/my-brews/:id" component={UserBrews} />
        <PrivateRoute path="/brews/:id" component={BeerDetails} />
        <PrivateRoute path="/add-a-beer" component={AddBeer} />
        <PrivateRoute path="/update-a-beer/:id" component={UpdateBeer} />
        <PrivateRoute path="/logout" component={Logout} />
      </header>
    </div>
  );
}

export default App;
