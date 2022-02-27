import { Action } from 'redux';
import { Note } from '../../types';
import { NOTE_ADD } from '../constants';

export interface NoteAdd extends Action {
    type: typeof NOTE_ADD;
    note: Note;
}

export type NoteAddAction = NoteAdd;

export const noteAddRequest = (note: Note): NoteAdd => ({
    type: NOTE_ADD,
    note,
});
