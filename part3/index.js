const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
]
app.get('/info', (req, res) => {
  const currentTime = new Date()
  const entryCount = persons.length

  const responseHTML = `
      <html>
        <body>
        <p>Phonebook has infor for ${entryCount} people</p>
          <p>${currentTime}</p>
          
        </body>
      </html>
    `

  res.send(responseHTML)
})

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  // Tienes que pasar el ID a numbers porque lo entiende como string
  const id = Number(request.params.id)
  const person = persons.find(entry => entry.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).send('I can not find this person') // Retorna un 404 si no se encuentra la persona
  }
})

app.post('/api/persons', (request, response) => {
  const person = request.body

  if (!person || !person.name) {
    return response.status(404).json({
      error: 'Name or content missing'
    })
  }

  if (persons.some(existingPerson => existingPerson.name === person.name)) {
    return response.status(400).json({
      error: 'Name must be unique'
    })
  }

  const ids = persons.map(name => name.id)
  const maxId = Math.max(...ids)
  const newContact = {
    name: person.name,
    number: person.number ? person.number : '',
    id: maxId + 1
  }

  persons = [...persons, newContact]

  response.status(201).json(newContact)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(name => name.id !== id)
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
