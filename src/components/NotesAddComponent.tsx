import { useCallback, useMemo, useState } from 'react';
import styles from '../styles/App.module.css';

interface NotesAddComponentProps {
    setNoteText: (noteText: string) => void;
}

export const NotesAddComponent: React.FC<NotesAddComponentProps> = ({
    setNoteText,
}: NotesAddComponentProps): JSX.Element => {
    const [noteName, setNoteName] = useState<string>('');

    const handleChangeNoteName = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setNoteName(e.target.value),
        []
    );

    const noteNameError: boolean = useMemo(() => noteName.length > 300, [noteName]);

    const handleNoteAdd = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === 'Enter' && !noteNameError ? (setNoteText(noteName), setNoteName('')) : false,
        [noteName, setNoteText, noteNameError]
    );

    return (
        <div className={styles.addNotes}>
            <p className={styles.title}>Add note...</p>

            <input
                type="text"
                value={noteName}
                onKeyDown={handleNoteAdd}
                onChange={handleChangeNoteName}
                className={noteNameError ? styles.inputError : styles.inputCheck}
            />

            {noteNameError ? <span className={styles.errorText}>Message length is 300 simbols</span> : false}
        </div>
    );
};
