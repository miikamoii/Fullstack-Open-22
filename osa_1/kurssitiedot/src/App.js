const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }
  

  const Part = ({parts}) => {
    return (
      <div>
        <p>{parts[0].name} {parts[0].exercises}</p>
        <p>{parts[1].name} {parts[1].exercises}</p>
        <p>{parts[2].name} {parts[2].exercises}</p>
      </div>
    )
  }

  const Content = ({parts}) => {
    return (
    <div>
        <Part parts={parts}/>
    </div>
    )
  }

  const Total = () => {
    return (
    <div>
      <p>Number of excercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
    )
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App