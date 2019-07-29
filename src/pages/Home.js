import React from 'react';
import Dropdown from "../components/Dropdown";
import Layout from '../components/Layout';

function Index() {
  var array = [1,2,3];
  return (
    <Layout>
      <div>Home Page</div>
      <Dropdown label="text" values={array}/>
    </Layout>
    );
}

export default Index;