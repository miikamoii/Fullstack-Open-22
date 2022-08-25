const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()
const Person = require("./models/person")

morgan.token("body", req => {
    return JSON.stringify(req.body)
})

app.use(express.static("build"))
app.use(express.json())
app.use(cors())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

//"tiny"
//GET /api/persons 200 223 - 2.414 ms
//:method :url :status :res[content-length] - :response-time ms 

//tehtävänanto
// POST /api/persons 200 61 - 4.896 ms {"name":"Liisa Marttinen", "number":"040-24567"}
//:method :url :status :res[content-length] - :response-time ms :body

const persons = app.get("/api/persons", (req, res) => {
    Person.find({}).then(person => {
        res.json(person)
    })
})

app.get("/info", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end
        (
            "Phonebook has info for " + persons.length + " people\n"
            + new Date()
        )
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.delete("/api/persons/:id", (req, res, next) => {

    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.post("/api/persons", (req, res) => {
    const body = req.body
    console.log(body)

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: "name or number missing"
        })
    }

    Person.find({}).then(persons => {
        persons.forEach(person => {
            if (person.name === body.name) {
                return res.status(400).json({
                    error: "name is already in use"
                })
            }
        })
    })

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
        console.log("Person saved to MongoDB")
    })
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})