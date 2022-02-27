import styles from '../styles/App.module.css';
import { Note } from '../types';

interface NoteComponentProps {
    note: Note;
    handleNoteDelete: (note: Note) => void;
}

export const NoteComponent: React.FC<NoteComponentProps> = ({ note, handleNoteDelete }: NoteComponentProps) => {
    return (
        <div className={styles.note}>
            <div className={styles.noteText}>{note.text}</div>
            <div className={styles.noteInfo}>
                <img src={note.icon} alt="icon" />
                <p>{note.city}</p>
                <p>{note.gradus}&#8451;</p>
                <p>{note.date}</p>
                <p>{note.time}</p>
            </div>

            <span className={styles.noteDel} onClick={() => handleNoteDelete(note)}>
                &#x2715;
            </span>
        </div>
    );
};
