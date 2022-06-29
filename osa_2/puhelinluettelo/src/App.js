import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 

  const [newName, setNewName] = useState('')

  persons.forEach((item, i) => {
    item.id = i + 1;
  })

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id : persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>
        {persons.map(person => 
        <p key={person.id}>
          {person.id}: {person.name}
        </p>)}
      </div>
      ...
    </div>
  )

}

export default App