import React from 'react';

import Layout from '../components/Layout';

function EditProfile() {
  return (
    <Layout>
        <div>Edit Profile:</div>
        <form>
            New Username:<br></br>
            <input type="text" name="n-username"></input><br></br>
            New Email:<br></br>
            <input type="text" name="n-email"></input><br></br>
            Previous Password:<br></br>
            <input type="password" name="p-password"></input><br></br>
            New Password:<br></br>
            <input type="password" name="n-password"></input><br></br>
            <button type="submit">Submit Changes</button>
        </form>
    </Layout>
  );
}


export default EditProfile;
