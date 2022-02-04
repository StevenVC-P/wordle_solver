import React from 'react';
import Letter from './letter';

const Word = ({id, value, currentWord, letters, setWords}) => {  

    const handleDisabled = () => {
        if (id !== currentWord){
            return true
        }
    }  

    const handleSubmit = e => {
        e.preventDefault();
        const {name, value} = e.target
        setWords(word => ({...word, [name]:value}))
        console.log(value)
    }

    return (
        <form onSubmit={handleSubmit} className="guess">
            {letters.map(letter =>
            <Letter
                key={letter.id}
                id={letter.id}
                value={letter.value}
                disabled = {handleDisabled()}
            />
            )}
            <button className="btn btn-primary"> 
                {id}
            </button>  
        </form> 
    );
}
 
export default Word;