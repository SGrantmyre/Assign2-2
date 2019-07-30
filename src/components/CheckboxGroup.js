import React from 'react';
import Checkbox from '../components/Checkbox';

class CheckboxGroup extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      options: this.props.options || []
    } 
  }
  
  //function onChange(e) {}
  render(){
    var checkOptions = this.props.options.map((option) =>
    <Checkbox label={option}/>
    ); 
    return (
    <div>
          {checkOptions}
    </div>);
  }
};

export default CheckboxGroup;