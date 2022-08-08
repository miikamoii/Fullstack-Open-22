import personService from "../services/persons"

const AddPerson = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
        
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