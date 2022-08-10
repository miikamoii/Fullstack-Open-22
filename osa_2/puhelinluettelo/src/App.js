import { useState, useEffect } from 'react'
import axios from 'axios'

import personService from "./services/persons"
import List from './components/List'

import AddPerson from './components/AddPerson'

import { inputHandler } from './components/Handlers'
import { handlePersonChange } from './components/Handlers'
import { handleNumberChange } from './components/Handlers'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputText, setInputText] = useState("")

  const removePerson = (id) => {
    console.log("Removal ID is " + id)
    const personObject = persons.find(p => p.id === id) 
    console.log(personObject)
    const person = personObject.name

    //jatka tästä (removePerson)
    if (window.confirm("Do you want to remove " + person + "?")) {
      personService
        .remove(id)
        .then(setPersons(persons.filter(p => p.id !== id)))
    console.log(person + " removed")
    }
    else
      console.log("Remove canceled")
  }


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
        <List 
        input={inputText} 
        persons={persons} 
        removePerson={(id) => removePerson(id)}
        />
      </div>
      ...
    </div>
  )

}
export default App;