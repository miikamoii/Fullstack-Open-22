import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}
const DisplayGood = (props) => {
  return (
    <p>Good: {props.good}</p>
  )
}

const DisplayNeutral = (props) => {
  return (
    <p>Neutral: {props.neutral}</p>
  )
}

const DisplayBad = (props) => {
  return (
    <p>Bad: {props.bad}</p>
  )
}

const DisplayAll = (props) => {
  return (
    <p>Total: {props.allClicks}</p>
  )
}

const DisplayAverage = (props) => {
  var average = 0;
  average = (((props.goodScore + (-1 * props.badScore)) / props.allClicks))

  if (isNaN(average)) {
    average = 0;
  }
  else average = average
  
    return(
      <p>Average: {average}</p>
    )
}

const DisplayPositive = (props) => {
  var positive = (props.goodScore / props.allClicks) * 100

  if (isNaN(positive)) {
    positive = 0
  }
  else positive = positive

  return(
    <p>Positive: {positive}%</p>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
        <Button 
        handleClick={() => {
          setGood(good + 1)
          setAll(allClicks + 1)
        }
        }
        text="Good"
        />
        <Button 
        handleClick={() => {
          setNeutral(neutral + 1)
          setAll(allClicks + 1)
        }
        }
          text="Neutral"
        />
        <Button 
        handleClick={() => {
        setBad(bad + 1)
        setAll(allClicks + 1)
        }
        }
        text="Bad"
        />
      <div>
        <h1>Statistics</h1>
      </div>
      <div>
        <DisplayGood good={good}/>
        <DisplayNeutral neutral={neutral}/>
        <DisplayBad bad={bad}/>
        <DisplayAll allClicks={allClicks}/>
        <DisplayAverage goodScore={good} badScore={bad} allClicks={allClicks}/>
        <DisplayPositive goodScore={good} allClicks={allClicks}/>
      </div>
    </div>
    
  )
}

export default App