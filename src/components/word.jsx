import React, { useState } from 'react';
import Letter from './letter';

const Word = ({id, value, currentWord, setWords}) => {  
    const letters = [
        {id:1,value:""},
        {id:2,value:""},
        {id:3,value:""},
        {id:4,value:""},
        {id:5,value:""},
    ]

    const handleSubmit = e => {
        e.preventDefault();
        letters.forEach(l => {
            value = value + l.value
            console.log(value)
            console.log(l)
        })       

        console.log(value)
    }

    return (
        <form onSubmit={handleSubmit} className="guess">
            {letters.map(letter =>
            <Letter
                key={letter.id}
                id={letter.id}
                value={letter.value}
            />
            )}
            <button className="btn btn-primary"> 
                Submit
            </button>  
        </form> 
    );
}
 
export default Word;