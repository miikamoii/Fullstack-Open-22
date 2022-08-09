import personService from "../services/persons"

const AddPerson = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {

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