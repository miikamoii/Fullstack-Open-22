const express = require("express")
const app = express()

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get("/api/persons", (req, res) => {
    res.json(persons)
})

app.get("/info", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end
        (
            "Phonebook has info for " + persons.length + " people\n"
            + new Date()
        )
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
        console.log("person found")
        console.log(person)
    } else {
        res.status(404).end()
        console.log("person not found 404")
    }
})



const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})