import { useState } from 'react'

const Button = ({ handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}

const StatisticLine = ({text, value, good, neutral, bad, allClicks}) => {
  
  switch (value) {
    case "good":
      return(
      <div>
        {text} <DisplayGood good={good}/>
      </div>
      )

    case "neutral":
      return(
        <div>
          {text} <DisplayNeutral neutral={neutral}/>
        </div>
        )

    case "bad":
      return(
        <div>
          {text} <DisplayBad bad={bad}/>
        </div>
        )

    case "total":
      return(
        <div>
          {text} <DisplayAll allClicks={allClicks}/>
        </div>
        )

    case "average":
      return(
        <div>
          {text} <DisplayAverage goodScore={good} badScore={bad} allClicks={allClicks}/>
        </div>
        )
    
    case "positive":
      return(
        <div>
          {text} <DisplayPositive goodScore={good} allClicks={allClicks}/>
        </div>
        )
    
    default:
      return(<p>error</p>)
  }
}
  

const Statistics = ({ good, neutral, bad, allClicks }) => {

  if (allClicks == 0) {
    return(
      <p>No feedback given</p>
    )
  }

  else
  return(
  <div>
    <StatisticLine text={"Good:"} value={"good"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    <StatisticLine text={"Neutral:"} value={"neutral"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    <StatisticLine text={"Bad:"} value={"bad"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    <StatisticLine text={"Total:"} value={"total"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    <StatisticLine text={"Average:"} value={"average"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    <StatisticLine text={"Positive:"} value={"positive"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
  </div>
  )
}

const DisplayGood = ({ good }) => good

const DisplayNeutral = ({ neutral }) => neutral

const DisplayBad = ({ bad }) => bad

const DisplayAll = ({ allClicks }) => allClicks


const DisplayAverage = ({ goodScore, badScore, allClicks }) => {

  var average = 0;
  average = (((goodScore + (-1 * badScore)) / allClicks))

  if (isNaN(average)) {
    average = 0;
  }

  else average = average
  
    return(
      average
    )
}

const DisplayPositive = ({ goodScore, allClicks }) => {
  var positive = (goodScore / allClicks) * 100

  if (isNaN(positive)) {
    positive = 0
  }

  else positive = positive

  return(
    positive + "%"
  )
}

const App = () => {

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
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      </div>
    </div>
    
  )
}

export default App