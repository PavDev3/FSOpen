import "./index.css";
import { Note } from "./Note.js";
import { useState } from "react";


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNotes] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      import: Math.random() < 0.5,
    };
    setNotes(notes.concat(noteToAddToState));
    setNewNotes("")
  }

  const handleShowAll = (event) => {
    setShowAll(() => !showAll);
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <ol>
        {notes.filter(note => {
          if (showAll === true) return true;
          return note.important === true;
        })
          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text " onChange={handleChange} value={newNote} />
        <button>Crear notas</button>
      </form>
    </div>
  );
}