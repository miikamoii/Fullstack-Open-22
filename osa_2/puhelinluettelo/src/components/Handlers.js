export const handlePersonChange = (event, setNewName) => {
    setNewName(event.target.value)
  }

export const handleNumberChange = (event, setNewNumber) => {
    setNewNumber(event.target.value)
  }

export const inputHandler = (event, setInputText) => {
    var lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  }

