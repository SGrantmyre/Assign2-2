import React from 'react';
import QuestionForm from '../components/QuestionForm';

class SurveyForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          numOfQuestions: this.props.numOfQuestions || 1
        }
    }

    render(){
        var numArray = [];
        for(var i =0; i < this.props.numOfQuestions; i++){
            numArray[i] = i+1
        }
        var questionForms = numArray.map((num) =>
        <div>
           <p>Question {num}</p>
            <QuestionForm/> 
        </div>
        
    ); 
        return(
            <form>
                <input type="text" name="Survey Name" placeholder="Enter a Name for your Survey"/>
                {questionForms} 
                <label for="Start Date">Start Date:</label>
                <input type="date" name="Start Date"/>
                <label for="Expiry Date">Expiry Date:</label>
                <input type="date" name="Expiry Date"/>
                <input type="submit" value="Submit Survey"></input>
            </form> 
        );
    }
}

export default SurveyForm;