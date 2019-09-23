import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/common';

import Main from 'containers/Main';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Main />
        </BrowserRouter>
    );
};

export default App;
