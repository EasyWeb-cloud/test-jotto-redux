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
    } else {
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Guessed Word</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>  
                    <tbody>
                        { guessedWords.map((word, index) => (
                            <tr data-test='guessed-word' key={index}>
                                <td>
                                    { word.guessedWord }
                                </td>
                                <td>
                                    { word.letterMatchCount }
                                </td>
                            </tr>
                        )) }
                    </tbody>  
                </table>
            </div>
        )
    }

    return <div data-test='component-guessed-words'>
        { contents }
    </div>
}

export default GuessedWords