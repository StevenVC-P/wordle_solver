import React, { useState } from 'react';
import Word from './word';

const Main = () => {
    const [words, setWords] = useState({id:1, value: ''})
    const [currentWord, setCurrentWord] = useState(1)



    return ( 
        <div>
            <h1>Wordle Solver</h1>
            
                <Word 
                    key={words.id}
                    id={words.id}
                    value={words.value}
                    setWords={setWords}
                    currentWord={currentWord}
                /> 
            
        </div>
    );
}
 
export default Main;