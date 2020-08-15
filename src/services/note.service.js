import axios from 'axios';

export async function getAllNotes() {
  let notes;
  try {
    // notes = await axios.get('http://localhost:3000/notes', { withCredentials: true });
    let response = await fetch('http://localhost:3000/notes', {method: 'GET', mode: 'cors', credentials: 'include' } );
    notes = await response.text();
    notes = JSON.parse(notes);
    notes = notes.notes;
    console.log('notes in service ', notes);
  } catch (err) {
    console.log(err);
  }
  // return notes.data.notes;
  return notes;
}

export async function getNewNote() {

}

export async function updateNote(note) {
  let result;
  try {
    result = await axios.put('http://localhost:3000/note', note);
  } catch (err) {
    console.log(err);
  }

  return result;
}
