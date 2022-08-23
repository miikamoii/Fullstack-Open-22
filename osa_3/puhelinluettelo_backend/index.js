const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

morgan.token("body", req => {
    return JSON.stringify(req.body)
})

app.use(express.json())
app.use(cors())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

//"tiny"
//GET /api/persons 200 223 - 2.414 ms
//:method :url :status :res[content-length] - :response-time ms 

//tehtävänanto
// POST /api/persons 200 61 - 4.896 ms {"name":"Liisa Marttinen", "number":"040-24567"}
//:method :url :status :res[content-length] - :response-time ms :body


let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

const randomId = () => Math.floor(Math.random() * 10000)


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

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    console.log("Person deleted, ID: " + id)
    res.status(204).end()
})

app.post("/api/persons", (req, res) => {
    const body = req.body
    console.log(body)

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: "name or number missing"
        })
    } 

    if (persons.some(person => person.name === body.name)) {
        return res.status(400).json({
            error: "name is already in use"
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: randomId()
    }

    persons = persons.concat(person)

    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})