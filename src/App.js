import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
// import ContentPage from './modules/contentPage';
import Login from './modules/Login';
import User from './modules/User';
import ProtectedRoute from './Routes/protectedRoutes/protectedRoutes';

const HomePage = React.lazy(()=> import('./modules/homePage'));
const ContentPage = React.lazy(()=> import('./modules/contentPage'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div>
          <Switch>
          <Route exact path="/">
              <Login />
            </Route>
            <ProtectedRoute path="/homePage">
              <HomePage />
            </ProtectedRoute>
            <ProtectedRoute path="/content">
              <ContentPage />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
