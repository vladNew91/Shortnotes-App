import { AppState } from '.';
import { Note } from '../types';

export const selectNotesList = (state: AppState): Note[] => state.notes.list.data;
