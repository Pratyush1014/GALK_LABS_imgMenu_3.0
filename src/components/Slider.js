import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

function Slider(props) {
    const [ value, setValue ] = useState(0); 
  return (
    <div>
        {props.name}
<RangeSlider
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)}
    />

    </div>
    
  )
}

export default Slider