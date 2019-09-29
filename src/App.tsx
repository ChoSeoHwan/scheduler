import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import { GlobalStyle } from 'styles/common';

import Main from 'containers/Main';

import LocationInfo from 'components/LocationInfo';

const App: React.FC = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <GlobalStyle />
                <Main />
            </Provider>
            <LocationInfo />
        </Fragment>
    );
};

export default App;
