import { combineReducers } from 'redux';
import { NotesListReducer, NotesListState } from './list';

export interface NotesState {
    list: NotesListState;
}

export const notesReducer = combineReducers({
    list: NotesListReducer,
});
