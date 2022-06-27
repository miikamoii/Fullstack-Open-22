import Course from './Course'

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

const Total = ( {course} ) => {
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
      <Course course={course[0]}></Course>
      <Total course={course[0]}></Total>
      <Course course={course[1]}></Course>
      <Total course={course[1]}></Total>
    </div>
  )
}
export default App