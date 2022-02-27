import React from 'react';
import { Note } from '../types';
import styles from '../styles/App.module.css';
import { NoteComponent } from '../components';

interface NotesListComponentProps {
    notes: Note[];
    handleNoteDelete: (note: Note) => void;
}

export const NotesListComponent: React.FC<NotesListComponentProps> = ({
    notes,
    handleNoteDelete,
}: NotesListComponentProps): JSX.Element => {
    return (
        <div className={styles.notesList}>
            {notes.map((note: Note, i: number) => (
                <NoteComponent note={note} key={i} handleNoteDelete={handleNoteDelete} />
            ))}
        </div>
    );
};
