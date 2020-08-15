import * as noteConstants from '../constants/action-types';
import * as noteService from '../services/note.service';
import EmptyNote from '../helpers/EmptyNote';

const getNotes = () => ({
  type: noteConstants.GET_NOTES,
});

const getNotesSuccess = (notes) => ({
  type: noteConstants.GET_NOTES_SUCCESS,
  payload: notes,
});

const getNotesFailure = () => ({
  type: noteConstants.GET_NOTES_FAILURE,
});

const addNewNote = () => ({
  type: noteConstants.ADD_NEW_NOTE,
});

const addNewNoteSuccess = (newNote) => ({
  type: noteConstants.ADD_NEW_NOTE,
  payload: newNote,
});

const updateNoteZIndex = (newNote) => {
  console.log('zIndex in action up: ', newNote)
  return {
  type: noteConstants.UPDATE_ZINDEX,
  payload: newNote,
}}


// TODO: Get Notes

export function getAllNotes() {
  return async (dispatch) => {
    dispatch(getNotes());
    try {
      const notes = await noteService.getAllNotes();
      console.log('notes in actions: ', notes);
      dispatch(getNotesSuccess({ notes: notes[0].notes, maxZIndex: notes[0].maxZIndex }));
    } catch (err) {
      console.log('get all notes error: ', err);
      dispatch(getNotesFailure());
    }
  };
}

export function addNewNoteFunc(notes) {
  const newNotes = notes.map((arr) => arr);
  newNotes.unshift(EmptyNote);
  return (dispatch) => {
    dispatch(addNewNote());
    dispatch(addNewNoteSuccess(newNotes));
  };
}

export function updateNote(note) {

}

export function updateNoteZIndexFunc(newNote) {
  return (dispatch) => {
    console.log('zindex actions: ', newNote);

    dispatch(updateNoteZIndex(newNote));
  }
}


