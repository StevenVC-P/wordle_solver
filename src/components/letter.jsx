import React from 'react';

const Letter = props => {
    return (     
    <input
        maxLength= {1}
        value = {props.value}
    />
  );
}
 
export default Letter;