import { useState } from 'react'
import './App.css'

function getRandom() {
  return Math.floor(Math.random() * 100);
}

const initialState = {
  color: '#14727d',
  emoji: '😉',
  mensaje: ''
}

function App() {


  const [secretNumber, setSecretNumber] = useState(getRandom())
  const [gameState, setGameState] = useState(initialState)
  const [input, setInput] = useState('')
  const [remaining, setRemaining] = useState(10)

  const handleSubmit = () => {

    
    const diference = Math.abs(input - secretNumber);
  

    if(diference <= 5 && diference != 0 && remaining != 0){
			setGameState({
        color: 'red',
        emoji: '🔥',
        mensaje: 'ESTAS ARDIENDO EN LLAMAS'
      })

      setRemaining(remaining-1)
		}

		else if(diference <= 10 && diference > 5 && remaining != 0){
			setGameState({
        color: 'orange',
        emoji: '👹',
        mensaje: 'ESTAS CERCA'
      })
      setRemaining(remaining-1)
		}

    else if(diference === 0){
      setGameState({
        color: 'pink',
        emoji: '🤩',
        mensaje: 'HAS GANADO'
      })
    }

    else if(remaining === 0){
      setGameState({
        color: 'blue',
        emoji: '😒',
        mensaje: 'HAS PERDIDO'
      })
    }
		
    
    else{
      setGameState({
        color: 'green',
        emoji: '😉',
        mensaje: 'SIGUE INTENTANDO'
      })
      setRemaining(remaining-1)

    }

  }

  return (
    <>
      <h1>Number guessing game</h1>
      <p>Try and guess a random number between 1 and 100.</p>
      <p>You have 10 attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">Guess a number</label>
        <input style={{border: `5px solid ${gameState.color}`}} onChange={(e) => setInput(+e.target.value)}type="text" id="guessField" className="guessField" />
        <button onClick={handleSubmit} className="guessSubmit">Submit a Guess</button>

        <div className="resultParas">
          <p>Previous Guesses: <span className="guesses"></span></p>
          <p>Guesses Remaining: <span className="lastResult">{remaining}</span></p>
          <p className="lowOrHi">{gameState.mensaje} {gameState.emoji}</p>
        </div>
      </div>
    </>
  )
}

export default App;
