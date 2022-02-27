import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { noteAddRequest } from '../modules';
import { NotesAddComponent } from '../components';
import { URL, API_KEY } from '../helpers';
import axios from 'axios';

export const NotesAddContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const [noteText, setNoteText] = useState<string>('');

    useEffect(() => {
        if (!noteText) return;

        axios(`${URL}${API_KEY}`).then((res) => {
            dispatch(
                noteAddRequest({
                    id: Date.now(),
                    text: noteText,
                    icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
                    city: res.data.name,
                    gradus: res.data.main.temp,
                    date: new Date().toDateString(),
                    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                })
            );
        });
    }, [noteText, dispatch]);

    return <NotesAddComponent setNoteText={setNoteText} />;
};
