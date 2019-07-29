import React from 'react';

import Layout from '../components/Layout';

function SignUp() {
  return (
    <Layout>
        <div>Please Sign Up Below: </div>
        <form>
            Username:<br></br>
            <input type="text" name="username"></input><br></br>
            Email:<br></br>
            <input type="text" name="email"></input><br></br>
            Password:<br></br>
            <input type="password" name="password"></input><br></br>
            <button type="submit">Sign-Up</button>
        </form>
    </Layout>
  );
}


export default SignUp;
