import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 

  const [newName, setNewName] = useState('')

//id:t henkilöille
  persons.forEach((item, i) => {
    item.id = i + 1;
  })

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }

    if (persons.some(element => element.name === newName)) {
      alert(newName + " is already in the phonebook")
    }
    else {
      console.log("Name was added " + newName)
      setPersons(persons.concat(personObject))
      setNewName("")
    }
  }

  const handlePersonChange = (event) => {
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