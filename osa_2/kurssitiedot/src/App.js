const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        id: 1,
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        id: 2,
        exercises: 7
      },
      {
        name: 'State of a component',
        id: 3,
        exercises: 14
      }
    ]
  }

  const Course = ({ course }) =>  {

    const Header = ({ course }) => {
      return (
        <h1>{course.name}</h1>
        )
    }

    const Content = ({ parts }) => {
      return(
        <div>
            <p>{parts[0].name} {parts[0].exercises}</p>
            <p>{parts[1].name} {parts[1].exercises}</p>
            <p>{parts[2].name} {parts[2].exercises}</p>
        </div>
      )
    }

    return(
      <div>
        <Header course={course}></Header>
        <Content parts={course.parts}></Content>
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
      <Course course={course}></Course>
    </div>
  )
}

export default App