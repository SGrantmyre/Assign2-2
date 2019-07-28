import React from 'react';
import {Router} from '@reach/router';

import Home from './pages/Home';
import SignIn from './pages/Sign-in';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path = '/' />
        <SignIn path = '/signin' />
      </Router>
    </div>
  );
}

export default App;
