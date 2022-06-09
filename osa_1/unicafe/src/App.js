import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => {
    return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
    )
  }

  const Displaygood = (props) => {
    return (
      <p>Good: {props.good}</p>
    )
  }
  const Displayneutral = (props) => {
    return (
      <p>Neutral: {props.neutral}</p>
    )
  }
  const Displaybad = (props) => {
    return (
      <p>Bad: {props.bad}</p>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
        <Button 
        handleClick={() => setGood(good + 1)}
        text="Good"
        />
        <Button 
        handleClick={() => setNeutral(neutral + 1)}
        text="Neutral"
        />
        <Button 
        handleClick={() => setBad(bad + 1)}
        text="Bad"
        />
      <div>
        <h1>Statistics</h1>
      </div>
      <div>
        <Displaygood good={good}/>
        <Displayneutral neutral={neutral}/>
        <Displaybad bad={bad}/>
      </div>
    </div>
    
  )
}

export default App