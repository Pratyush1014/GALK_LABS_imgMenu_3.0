import React from 'react';
import { useState } from 'react';
import { SketchPicker } from 'react-color';

function Colorpicker() {
    const [colorobj, setColorobj] = useState({
        showPicker: false,
        color: {
          r: '225',
          g: '155',
          b: '99',
          a: '2',
        }}) ;


    const onClick = ()=> {setColorobj({showPicker: true})} 
    const onClose = ()=> {setColorobj({showPicker: false})}
    const onChange = (color)=> {setColorobj({color: color.rgb, showPicker: true })}
  return (
    <div>
      <div  onClick={onClick}> <button type="button" class="btn btn-primary">
                Colors
              </button>
        <div  />

      </div>
      {colorobj.showPicker ? (
        <div >
          <div  onClick={onClose} ><button type="button" class="btn btn-primary my-3">
                Close
              </button></div>
          <SketchPicker color={colorobj.color} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
}

export default Colorpicker