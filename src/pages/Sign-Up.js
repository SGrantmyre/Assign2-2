import React from 'react';

import Layout from '../components/Layout';

function SignUp() {
  return (
    <Layout>
        <div>Please Sign Up Below: </div>
        <form>
            Username:<br>
            <input type="text" name="username"><br>
            Email:<br>
            <input type="text" name="email"><br>
            Password:<br>
            <input type="password" name="password"><br>
            <button type="submit">Sign-Up</button>
        </form>
    </Layout>
  );
}


export default SignUp;
