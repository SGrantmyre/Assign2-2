import React, {Component} from 'react';
import {Router} from '@reach/router';
import axios from 'axios';

import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import CreateSurvey from './pages/CreateSurvey'
import EditProfile from './pages/EditProfile';
import SignUp from './pages/Sign-Up';
import SurveyList from './pages/SurveyList';
import SurveyResults from './pages/SurveyResults';
import TakeSurvey from './pages/TakeSurvey';
import UserHome from './pages/UserHome';


// const User = require('./models/User');
class App extends Component {
  //initial state
  state = {
    data: [],
    id: 0,
    message: null,
    username: '',
    email: '',
    password: ''
  };

  componentDidMount() {
    this.getUsers();
    this.putUser();
  }

  render(){ 
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

  //Get Method
  getUsers = () => {
    axios.get('http://localhost:3000/api/getUser').then(({ data }) => {
      console.log(data)
      this.setState({ user: data })
    });


    // fetch('http://localhost:3000/api/getUser')
    //   .then((user) => user.json())
    //   .then((res) => this.setState({user: res.data}));
  };
}

  //Put Method
  putUser = (message) => {
     const { username, email, password } = this.state;
     //let currentUsers = this.state.data.map((data) => data.id);
      axios.post('http://localhost:3000/api/putUser', {
        username: username,
        email: email,
        password: password
      });
    }

export default App;
