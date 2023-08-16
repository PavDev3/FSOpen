import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchName, setSearchName] = useState('');

    const addPerson = (event) => {
        event.preventDefault();

        // Check if the name already is use
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is allready added to list`);
            return
        }

        const personObject = {
            name: newName,
            number: newNumber,
        };

        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('');
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleSearchName = (event) => {
        setSearchName(event.target.value)
    };

    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter show with <input value={searchName} onChange={handleSearchName} />
            </div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                    <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App