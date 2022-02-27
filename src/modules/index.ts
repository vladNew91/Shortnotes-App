import { notesReducer, NotesState } from './reducers';
import { combineReducers, compose, createStore } from 'redux';

export * from './constants';
export * from './actions';
export * from './selectors';
export * from './reducers';

export interface AppState {
    notes: NotesState;
}

const appReducer = combineReducers({
    notes: notesReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducer, composeEnhancers());
