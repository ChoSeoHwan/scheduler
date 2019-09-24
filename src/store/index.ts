import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'store/reducers';
import { PageStatusState } from 'store/reducers/PageStatusReducer';

export interface StoreState {
    PageStatusReducer: PageStatusState;
}

export default createStore(rootReducer, composeWithDevTools());
