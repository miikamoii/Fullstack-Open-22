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
      },
      {
        name: 'Testikurssi',
        id: 4,
        exercises: 11
      }
    ]
  }

  const Course = ({ course }) =>  {

    const Header = ({ course }) => {
      return (
        <h1>{course.name}</h1>
        )
    }

    const Content = ({}) => {
      return(
        <div>
          {course.parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>)}
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
  const total = Object.keys(course.parts).reduce((previous, key) => {
    return previous + course.parts[key].exercises;
  }, 0);
  return(
    <div>
      <b>Total of exercises: {total}</b>
    </div>
  )
}


  

  return (
    <div>
      <Course course={course}></Course>
      <Total></Total>
    </div>
  )
}
export default App