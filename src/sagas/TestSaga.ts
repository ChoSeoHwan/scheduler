import { put, takeEvery, delay } from 'redux-saga/effects';

import { TestAction } from 'store/actions';

function* fetchTestDataSaga(order: string, page: number) {
    yield delay(2000); // call api with fetch or axios

    if (order === 'asc') {
        yield put(TestAction.getTestData([1, 2, 3, 4]));
    } else {
        yield put(TestAction.getTestData([4, 3, 2, 1]));
    }
}

export function* TestSaga() {
    yield takeEvery<ReturnType<typeof TestAction.fetchTestData>>(
        TestAction.fetchTestData.type,
        ({ payload }) => fetchTestDataSaga(...payload)
    );
}
