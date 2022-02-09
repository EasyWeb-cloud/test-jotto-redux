import { useEffect } from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions'

function App() {
  const success = false
  const secretWord = 'party'
  const guessedWords = []

  useEffect(() => {
    getSecretWord()
  }, [])

  return (
    <div className="App" data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={success}/>
      <Input success={success} secretWord={secretWord}/>
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
