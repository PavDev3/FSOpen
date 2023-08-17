import axios from "axios"

export const getPersons = () => {
    return axios.get('http://localhost:3001/persons')
        .then(response => response.data)
}

export const addPersons = (personObject) => {
    return axios.post('http://localhost:3001/persons', personObject)
        .then(response => response.data)
}

export const removePersons = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`);
}