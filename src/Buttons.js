import React from 'react';
import './Buttons.css';

function Buttons(props) {
  
    return(
        <div className="buttons">
            <button type="submit">Add user</button>
            <button type="reset" onClick={() => props.removeAllUserMethod()}>Clear</button>
        </div>
   );   
}
  
export default Buttons;