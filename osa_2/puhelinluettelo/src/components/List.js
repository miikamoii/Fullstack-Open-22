function List({input, persons}) {
    const filteredData = persons.filter((person) => {
      if (input === '') {
        return person;
      }
      else {
        return person.name.toLowerCase().includes(input)
      }
    })
    return (
      <ul>
        {filteredData.map((person) => (
          <p key={person.id}>
            {person.id}: {person.name} {person.number}
          </p>
        ))}
      </ul>
    )
  }

  export default List