import React from 'react'

const GuessedWords = (props) => {
    const { guessedWords } = props

    let contents
    if(!guessedWords.length){
        contents = (
            <span data-test='guess-instructions'>
                Try to guess the word!
            </span>
        )
    }

    return <div data-test='component-guessed-words'>
        { contents }
    </div>
}

export default GuessedWords