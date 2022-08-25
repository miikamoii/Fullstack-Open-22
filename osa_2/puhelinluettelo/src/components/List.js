function List({input, persons, removePerson}) {
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
            {person.name} {person.number} <button onClick={() => removePerson(person.id)}>Remove</button>
          </p>
        ))}
      </ul>
    )
  }

  export default List
