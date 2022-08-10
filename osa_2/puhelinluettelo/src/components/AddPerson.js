import personService from "../services/persons"

const AddPerson = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {

  const updatePerson = (id, newNumber) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = {...person, number: newNumber}

    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
  }

  const randomId = () => {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
  }

  const personObject = {
    name: newName,
    number: newNumber,
    id: randomId(),
  }

  if (persons.some(element => element.name === newName)) {
    let person = persons.find(person => person.name === newName)
    let currId = person.id
    //alert(newName + " is already in the phonebook")
    if (window.confirm(newName + " is already in the phonebook, replace old number with a new one?")) {
      updatePerson(currId, newNumber)
      setNewName("")
      setNewNumber("")
    }
    else {
      setNewName("")
      setNewNumber("")
    }
  }
  else {
    console.log("Name was added " + newName)
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName("")
        setNewNumber("")
      })
  }
}

export default AddPerson;