import React from 'react';
import {Router} from '@reach/router';

import Home from './pages/Home';
import SignIn from './pages/Sign-in';


function App() {
  return (
    <div className="App">
      <Router>
        <CreateSurvey path = '/createsurvey' />
        <EditProfile path = '/editprofile' />
        <Home path = '/' />
        <SignIn path = '/signin' />
        <SignUp path = '/signup' />
        <SurveyList path = '/surveylist'/>
        <SurveyResults path = '/surveyresults'/>
        <TakeSurvey path = '/takesurvey'/>
        <UserHome path = '/userhome'/>
      </Router>
    </div>
  );
}

export default App;
