import React from 'react';
import {Router} from '@reach/router';

import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import CreateSurvey from './pages/CreateSurvey'
import EditProfile from './pages/EditProfile';
import SignUp from './pages/Sign-Up';
import SurveyList from './pages/SurveyList';
import SurveyResults from './pages/SurveyResults';
import TakeSurvey from './pages/TakeSurvey';
import UserHome from './pages/UserHome';

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
