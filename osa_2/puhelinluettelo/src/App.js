import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: "050 123 456"
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //id:t henkilöille
  persons.forEach((item, i) => {
    item.id = i + 1;
  })

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    if (persons.some(element => element.name === newName)) {
      alert(newName + " is already in the phonebook")
      setNewName("")
      setNewNumber("")
    }
    else {
      console.log("Name was added " + newName)
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
          <div>
            number: <input value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.id}>
            {person.id}: {person.name} {person.number}
          </p>)}
      </div>
      ...
    </div>
  )

}

export default App