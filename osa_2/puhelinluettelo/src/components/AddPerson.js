import personService from "../services/persons"

const AddPerson = ({ 
  newName, setNewName, newNumber, 
  setNewNumber, persons, setPersons, setNotificationMessage, setIsError }) => {

  const updatePerson = (id, newNumber) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = {...person, number: newNumber}

    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
      .catch(error => {
        setIsError(true)
        setNotificationMessage(person.name + " has already been removed from database")
        setTimeout(() => {
          setNotificationMessage(null)
      }, 5000)
      setIsError(false)
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
    
    if (window.confirm(newName + " is already in the phonebook, replace old number with a new one?")) {
      updatePerson(currId, newNumber)
      setNewName("")
      setNewNumber("")
      setNotificationMessage(newName + "'s number was updated")
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    }
    else {
      setNewName("")
      setNewNumber("")
    }
  }
  else {
    console.log("Name was added " + newName)
    setNotificationMessage(newName + " was added")
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
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