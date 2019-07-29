import React from 'react';

import Layout from '../components/Layout';

function EditProfile() {
  return (
    <Layout>
        <div>Edit Profile:</div>
        <form>
            New Username:<br>
            <input type="text" name="n-username"><br>
            New Email:<br>
            <input type="text" name="n-email"><br>
            Previous Password:<br>
            <input type="password" name="p-password"><br>
            New Password:<br>
            <input type="password" name="n-password"><br>
            <button type="submit">Submit Changes</button>
        </form>
    </Layout>
  );
}


export default EditProfile;
