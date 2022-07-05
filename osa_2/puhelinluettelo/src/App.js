import { useState } from 'react'

import List from './components/List'

import AddPerson from './components/AddPerson'

import { inputHandler } from './components/Handlers'
import { handlePersonChange } from './components/Handlers'
import { handleNumberChange } from './components/Handlers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  persons.forEach((person, i) => {
    person.id = i + 1;
  })

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputText, setInputText] = useState("");

  
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <p><label>Search <input onChange={(event) => {
          event.preventDefault();
          inputHandler(event, setInputText)

        }} type="text"></input></label></p>
      </div>
      <h2>Add new </h2>
      <form onSubmit={ (event) => {
        event.preventDefault();
        AddPerson({newName, setNewName, newNumber, setNewNumber, persons, setPersons})
      }}>
        <div>
          name: <input
            value={newName}
            onChange={(event) => {
              event.preventDefault();
              handlePersonChange(event, setNewName)
            }}
          />
          <div>
            number: <input value={newNumber}
              onChange={(event) => {
                handleNumberChange(event, setNewNumber)
              }}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <List input={inputText} persons={persons}/>
      </div>
      ...
    </div>
  )

}

export default App