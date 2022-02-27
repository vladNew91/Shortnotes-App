import { Note } from '../../types';
import { NotesListAction } from '../actions';
import {
    NOTES_LIST,
    NOTE_ADD,
    NOTE_DELETE,
} from '../constants';

export interface NotesListState {
    data: Note[];
}

const initialState: NotesListState = {
    data: [],
};

export const NotesListReducer = (
    state: NotesListState = initialState,
    action: NotesListAction
): NotesListState => {
    switch (action.type) {
        case NOTES_LIST:
            return {
                ...state,
                data: action.data,
            };
        case NOTE_ADD:
            return {
                ...state,
                data: [...state.data, action.note],
            };
        case NOTE_DELETE:
            return {
                ...state,
                data: state.data.filter((item: Note) => item.id !== action.note.id),
            };
        default:
            return state;
    }
};
