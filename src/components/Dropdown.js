import React from 'react';

class Dropdown extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      options: this.props.options || []
    } 
 
  }
  
  //function onChange(e) {}
  render(){
    var dropdownOptions = this.props.options.map((option) =>
    <option value={option} >{option}</option>
    ); 
    return (
    <select>
          {dropdownOptions}
    </select>);
  }
};

export default Dropdown;