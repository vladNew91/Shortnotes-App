import React from 'react';
import { store } from './modules';
import { Provider } from 'react-redux';
import { LayoutComponent } from './components';
import { NotesListContainer, NotesAddContainer } from './containers';

export const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <LayoutComponent>
                <NotesListContainer />
                <NotesAddContainer />
            </LayoutComponent>
        </Provider>
    );
};
