import { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions'

const App = () => {
  const dispatch = useDispatch()

  const { success, secretWord, guessedWords } = useSelector(state => state)
  console.log('hello', secretWord)

  useEffect(() => {
    dispatch(getSecretWord())
  }, [dispatch])

  return (
    <div className="App" data-test='component-app'>
      <h1>Jotto</h1>
      <div>The secret word is {secretWord}</div>
      <Congrats success={success}/>
      <Input success={success} secretWord={secretWord}/>
      <GuessedWords guessedWords={guessedWords} />
      <div>Total guesses: {guessedWords.length}</div>
    </div>
  );
}

export default App;
