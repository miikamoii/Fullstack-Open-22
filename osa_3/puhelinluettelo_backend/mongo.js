const mongoose = require("mongoose")

if (process.argv.length < 3) {
    console.log("give password as argument")
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://miikamoi:${password}@cluster0.8mbev6s.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
})

const Person = mongoose.model("Person", personSchema)

const randomId = () => Math.floor(Math.random() * 10000)

const person = new Person ({
    id: randomId(),
    name: name,
    number: number
})

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log("Phonebook:")
        result.forEach(person => {
            console.log(person.name + " " + person.number)
        })
    })
    mongoose.connection.close()
} 
else

person.save().then(result => {
    console.log("Added " + result.name + " number " + result.number + " to phonebook")
    mongoose.connection.close()
})