import React from 'react';
import Dropdown from "../components/Dropdown";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/Checkbox";
import Layout from '../components/Layout';
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';

function Index() {
  var array = ["one","two","three"];
  return (
    <Layout>
      <div>Home Page</div>
      <Dropdown label="text" options={array}/> 
      <RadioGroup options={array}/> 
      <CheckboxGroup options={array}/>
    </Layout>
    );
}

export default Index;