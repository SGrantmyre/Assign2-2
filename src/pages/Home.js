import React from 'react';
import Dropdown from "../components/Dropdown";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/Checkbox";
import Layout from '../components/Layout';
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import Question from '../components/Question';

function Index() {
  return (
    <Layout>
      <div>Home Page</div>
      <Question question="Question?" comp_id={1} options={["1","2","3","4"]}/>
    </Layout>
    );
}

export default Index;