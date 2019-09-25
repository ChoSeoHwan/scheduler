import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

export interface TestState {
    data: number[];
    loading: boolean;
}

const initialState: TestState = {
    data: [0, 1, 2, 3],
    loading: true
};

class TestReducer extends ImmerReducer<TestState> {
    public fetchTestData(order: string, page: number) {
        this.draftState.loading = true;
    }

    public getTestData(data: number[]) {
        this.draftState.loading = false;
        this.draftState.data = data;
    }
}

export default createReducerFunction(TestReducer, initialState);
export const TestAction = createActionCreators(TestReducer);
