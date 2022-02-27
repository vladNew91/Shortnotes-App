import { Action } from 'redux';
import { Note } from '../../types';
import { NOTE_DELETE } from '../constants';

export interface NoteDelete extends Action {
    type: typeof NOTE_DELETE;
    note: Note;
}

export type NoteDeleteAction = NoteDelete;

export const noteDeleteRequest = (note: Note): NoteDelete => ({
    type: NOTE_DELETE,
    note,
});
