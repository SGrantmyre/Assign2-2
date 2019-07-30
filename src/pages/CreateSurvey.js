import React from 'react';

import Layout from '../components/Layout';
import SurveyForm from '../components/SuveryForm';
import Dropdown from '../components/Dropdown';


function CreateSurvey() {

  return (
    <Layout>
        <h1>Create Survey</h1>
        {/* <Dropdown options={[1,2,3,4,5]}/> */}
        <SurveyForm numOfQuestions = {3}/>
    </Layout>
  );
}


export default CreateSurvey;
