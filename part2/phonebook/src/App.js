import React, { useEffect, useState } from 'react'
import { addPersons, getPersons, removePersons } from './db';
import './index.css'


const Notification = ({ notification }) => {
    if (notification === null) {
        return null
    }

    const notificationStyle = {
        color: notification.color,
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={notificationStyle}>
            {notification.message}
        </div>
    )
}


const Filter = ({ searchName, handleSearchName }) => {
    return (
        <div>
            filter show with <input value={searchName} onChange={handleSearchName} />
        </div>
    )
}

const Persons = ({ persons, searchName, handleDelete }) => {
    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
        <ul>
            {filteredPersons.map((person, index) => (
                <li key={index}>
                    {person.name} - {person.number}
                    <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
                </li>
            ))}
        </ul>
    );
};

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchName, setSearchName] = useState('');
    const [notification, setNotification] = useState(null)

    useEffect(() => {
        getPersons()
            .then(setPersons)
    }, []);

    const displayNotification = (newNotification) => {
        setNotification(newNotification)
        setTimeout(() => {
            setNotification(null)
        }, 5000)
    }


    const addPerson = (event) => {
        event.preventDefault();

        // Check if the name already is use 
        if (persons.some(person => person.name.toLowerCase() === newName.toLocaleLowerCase())) {
            alert(`${newName} is already added to list`);
            return
        }

        const personObject = {
            name: newName,
            number: newNumber,
        };

        addPersons(personObject)
            .then(person => {
                displayNotification({ color: 'green', message: `Added '${newName}` })
                setPersons([...persons, person])
            })



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

    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            removePersons(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id));
                })
                .catch(error => {
                    console.error("Error deleting person", error);
                });
        }
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification notification={notification} />

            <Filter searchName={searchName} handleSearchName={handleSearchName} />

            <h3> Add new</h3>
            <PersonForm
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                addPerson={addPerson}
            />
            <h2>Numbers</h2>

            <Persons persons={persons} searchName={searchName} handleDelete={handleDelete} />
        </div>
    )
}

export default App