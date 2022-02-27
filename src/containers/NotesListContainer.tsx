import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noteDeleteRequest, selectNotesList } from '../modules';
import { NotesListComponent } from '../components';
import styles from '../styles/App.module.css';
import { Note } from '../types';

export const NotesListContainer: React.FC = (): JSX.Element => {
    const notes = useSelector(selectNotesList);

    const dispatch = useDispatch();

    const handleNoteDelete = useCallback((note: Note) => dispatch(noteDeleteRequest(note)), [dispatch]);

    if (!notes.length) return <div className={styles.mainTitle}>Create your notes</div>;

    return <NotesListComponent notes={notes} handleNoteDelete={handleNoteDelete} />;
};
