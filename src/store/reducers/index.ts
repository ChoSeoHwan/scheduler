import { combineReducers } from 'redux';

import PageStatusReducer from 'store/reducers/PageStatusReducer';
import TestReducer from 'store/reducers/TestReducer';

export default combineReducers({
    PageStatusReducer,
    TestReducer
});
