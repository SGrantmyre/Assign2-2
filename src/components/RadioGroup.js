import React from 'react';
import RadioButton from '../components/RadioButton';

class RadioGroup extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      options: this.props.options || []
    } 
  }
  
  //function onChange(e) {}
  render(){
    var radioOptions = this.props.options.map((option) =>
    <RadioButton label={option}/>
    ); 
    return (
    <div>
          {radioOptions}
    </div>);
  }
};

export default RadioGroup;