import React from 'react'

const Congrats = (props) => {
    const { success } = props

    if(success){
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! U guessed the word
                </span>
            </div>
        )
    } else {
        return <div data-test="component-congrats"/>
    }
}

export default Congrats