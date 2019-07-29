import React from 'react';

import Layout from '../components/Layout';

function SignIn() {
  return (
    <Layout>
        <div>Please Sign In Below: </div>
        <form>
            Username:<br></br>
            <input type="text" name="username"></input><br></br>
            Password:<br></br>
            <input type="password" name="password"></input><br></br>
            <button type="submit">Sign-In</button>
        </form>
    </Layout>
  );
}


export default SignIn;