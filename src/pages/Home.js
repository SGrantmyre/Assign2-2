import React from 'react';
import Dropdown from "../components/Dropdown";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/Checkbox";
import Layout from '../components/Layout';

function Index() {
  var array = [1,2,3];
  return (
    <Layout>
      <div>Home Page</div>
      <Dropdown label="text" options={array}/> 
      <RadioButton label="text"/> 
      <CheckBox label="text"/>
    </Layout>
    );
}

export default Index;