const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  const Header = () => {
    return (
    <div>
      <h1>Half Half Stack application development</h1>
    </div>
    )
  }

  const Content = () => {
    return (
    <div>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
    </div>
    )
  }

  const Total = () => {
    return (
    <div>
      <p>Number of excercises {exercises1 + exercises2 + exercises3}</p>
    </div>
    )
  }

  return (
    <div>
      <Header/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App