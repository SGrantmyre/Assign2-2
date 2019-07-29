import React from 'react';

const Dropdown = (label, {values}) => {
  
  //function onChange(e) {}

  return <select name={label}>
            {values.map(value => (
              <React.Fragment key={value.id}>
                <option value= {value}>{value}</option>
              </React.Fragment>
            ))}
          </select>;
};

export default Dropdown;