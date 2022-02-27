import { Action } from 'redux';
import { Note } from '../../types';
import { NoteAdd, NoteDelete } from '../actions';
import { NOTES_LIST } from '../constants';

export interface NotesList extends Action {
    type: typeof NOTES_LIST;
    data: Note[];
}

export type NotesListAction =
    | NotesList
    | NoteAdd
    | NoteDelete;

export const notesList = (data: Note[]): NotesList => ({
    type: NOTES_LIST,
    data,
});
