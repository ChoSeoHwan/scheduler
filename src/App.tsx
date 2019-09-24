import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import { GlobalStyle } from 'styles/common';

import Main from 'containers/Main';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Main />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
