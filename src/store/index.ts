import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'sagas';

import rootReducer from 'store/reducers';
import { PageStatusState } from 'store/reducers/PageStatusReducer';
import { TestState } from 'store/reducers/TestReducer';

const sagaMiddleware = createSagaMiddleware();

export interface StoreState {
    PageStatusReducer: PageStatusState;
    TestReducer: TestState;
}

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
