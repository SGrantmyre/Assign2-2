import React from 'react';
import Dropdown from './Dropdown';

class QuestionForm extends React.Component{
    render(){
        return(
            <form>
                <div>
                    <p>Select a answer type for your question: </p>
                    <Dropdown options={["Dropdown", "Checkboxes", "Radio Buttons"]}/>
                </div>
                
                <input type="text" placeholder="Question" name="question"/>
                <div>
                    <input type="text" placeholder="Answer 1" name="option1"/>
                    <input type="text" placeholder="Answer 2" name="option2"/>
                    <input type="text" placeholder="Answer 3" name="option3"/>
                    <input type="text" placeholder="Answer 4" name="option4"/>
                    <input type="text" placeholder="Answer 5" name="option5"/>
                </div>
            </form>
        );
    }

    
};
export default QuestionForm;