import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  //id:t henkilöille
  persons.forEach((item, i) => {
    item.id = i + 1;
  })

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

  
}

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

  console.log(persons)

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  function List(props) {
    //create a new array by filtering the original array
    const filteredData = persons.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
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

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
      <p><label>Search <input onChange={inputHandler} type="text"></input></label></p>
      </div>
      <h2>Add new </h2>
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
      <List input={inputText}/>
      </div>
      {/* <div>
        {persons.map(person =>
          <p key={person.id}>
            {person.id}: {person.name} {person.number}
          </p>)}
      </div> */}
      ...
    </div>
  )

}

export default App