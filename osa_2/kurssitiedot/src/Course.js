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

export default Course;