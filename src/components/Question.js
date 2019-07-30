import React from 'react';
import Dropdown from "../components/Dropdown";
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';

function Question (props){
    const question = props.question;
    const comp_id = props.comp_id;
    const options = props.options || []

    if(comp_id == 1){
        return (
            <div>
                <p>{props.question}</p>
                <Dropdown options={props.options}/>
            </div>
        );
    }
    else if(comp_id == 2){
        return(
            <div>
                <p>{props.question}</p>
                <CheckboxGroup options={props.options}/>
            </div>
        );
        
    }
    else if(comp_id == 3){
        return(
            <div>
                <p>{props.question}</p>
                <RadioGroup options={props.options}/>
            </div>  
        )
        
    }

}

export default Question;