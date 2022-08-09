import personService from "../services/persons"

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
            {person.id}: {person.name} {person.number} <button onClick={() => removePerson(person.id)}>Remove</button>
          </p>
        ))}
      </ul>
    )
  }

  export default List

  /*
  <button 
          onClick={
            if(window.confirm("Do you want to remove " + person.name + "?")) {
              personService
                .remove(id)
                .then(setPersons(persons.filter(p => p.id !== id)))
            }}>
            */