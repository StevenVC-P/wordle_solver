import React, { useState } from 'react';
import Word from './word';

const Main = () => {
    const [letters, setLetters] = useState ([
        {id:1, value: ''},
        {id:2, value: ''},
        {id:3, value: ''},
        {id:4, value: ''},
        {id:5, value: ''},
    ])
    const [words, setWords] = useState([
        {id:1, value: ''},
        {id:2, value: ''},
        {id:3, value: ''},
        {id:4, value: ''},
        {id:5, value: ''},
        {id:6, value: ''},
    ])
    const [currentWord, setCurrentWord] = useState(1)



    return ( 
        <div>
            <h1>Wordle Solver</h1>
            {words.map(word => 
                <Word 
                    key={word.id}
                    id={word.id}
                    value={word.value}
                    setWords={setWords}
                    letters = {letters}
                    setLetters={setLetters}
                    currentWord={currentWord}
                /> 
            )}
        </div>
    );
}
 
export default Main;