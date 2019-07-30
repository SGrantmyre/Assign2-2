import React, {Component} from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      username : '',
      email : '',
      password : ''
    };
  }

  //handle when a user changes an input
  handleTyping = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/putUser').then(({ data }) => {
      console.log(data);
    })
    // .then(res => {
    //   if (res.status === 200){
    //     this.props.history.push('/');
    //   } else{
    //     const error = new Error(res.error);
    //     throw error;
    //   }
    // }) 
    .catch(e => {
      console.log(e);
      alert(`${e}`);
    });
  }

  render() {
    return(
      <Layout>
        <h1>Please Sign Up Below: </h1>
        <form onSubmit={this.onSubmit}>
          <input type="username" name="username" placeholder="Username" value={this.state.username} 
          onChange={this.handleTyping} required/>
          <input type="email" name="email" placeholder="E-Mail" value={this.state.email} 
          onChange={this.handleTyping} required/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} 
          onChange={this.handleTyping} required/>
          <input type ="submit" value="Submit"/>
        </form>
    </Layout>
    );
  }
}


export default SignUp;
