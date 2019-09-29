import { render } from '@testing-library/react';
import * as React from 'react';
import { Router } from 'react-router';

import App from 'App';
import { createMemoryHistory, MemoryHistory } from 'history';

interface SetupState {
    history?: MemoryHistory;
}

export const renderRouter = ({
    history = createMemoryHistory()
}: SetupState = {}) => {
    return render(
        <Router history={history}>
            <App />
        </Router>
    );
};
