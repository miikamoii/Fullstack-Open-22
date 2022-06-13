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
      <tr>
        <td>{text}</td><td><DisplayGood good={good}/></td>
      </tr>
      )

    case "neutral":
      return(
        <tr>
          <td>{text}</td><td><DisplayNeutral neutral={neutral}/></td>
        </tr>
        )

    case "bad":
      return(
        <tr>
          <td>{text}</td><td><DisplayBad bad={bad}/></td>
        </tr>
        )

    case "total":
      return(
        <tr>
          <td>{text}</td><td><DisplayAll allClicks={allClicks}/></td>
        </tr>
        )

    case "average":
      return(
        <tr>
          <td>{text}</td><td><DisplayAverage goodScore={good} badScore={bad} allClicks={allClicks}/></td>
        </tr>
        )
    
    case "positive":
      return(
        <tr>
          <td>{text}</td><td><DisplayPositive goodScore={good} allClicks={allClicks}/></td>
        </tr>
        )
    
    default:
      return(<p>error</p>)
  }
}
  

const Statistics = ({ good, neutral, bad, allClicks }) => {

  if (allClicks == 0) {
    return(
      <tbody><tr><td>No feedback given</td></tr></tbody>
    )
  }

  else
  return(
    <tbody>
      <StatisticLine text={"Good:"} value={"good"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      <StatisticLine text={"Neutral:"} value={"neutral"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      <StatisticLine text={"Bad:"} value={"bad"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      <StatisticLine text={"Total:"} value={"total"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      <StatisticLine text={"Average:"} value={"average"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      <StatisticLine text={"Positive:"} value={"positive"} good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </tbody>
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
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      </table>
    </div>
    
  )
}

export default App