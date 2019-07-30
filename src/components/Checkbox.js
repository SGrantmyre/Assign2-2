import React from 'react';

const Checkbox = (label) => {
  const [checked, setChecked] = React.useState(false);
  var text = ""+JSON.stringify(label);
  text = 	text.substring(0, text.length - 2);
  text = text.replace('{"label":"', '');

  function onChange(e) {
    setChecked(e.target.checked);
  }

  
  return (
  <div>
    <input type="checkbox" id={label} onChange={onChange} checked={checked} name={label} value={label}/>{text}
  </div>);


};

export default Checkbox;