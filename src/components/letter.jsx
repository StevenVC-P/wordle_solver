import React from 'react';

const Letter = props => {
    return (     
    <input disabled={props.disabled}
        maxLength= {1}
    />
  );
}
 
export default Letter;