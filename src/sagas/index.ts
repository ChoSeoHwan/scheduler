import { all } from 'redux-saga/effects';

import { TestSaga } from 'sagas/TestSaga';

export default function* rootSaga() {
    yield all([TestSaga()]);
}
