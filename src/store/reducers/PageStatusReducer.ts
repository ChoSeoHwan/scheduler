import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

export interface PageStatusState {
    leftPanel: boolean;
}

const initialState: PageStatusState = {
    leftPanel: true
};

class PageStatusReducer extends ImmerReducer<PageStatusState> {
    public setLeftPanel(status: boolean) {
        this.draftState.leftPanel = status;
    }
}

export default createReducerFunction(PageStatusReducer, initialState);
export const PageStatusAction = createActionCreators(PageStatusReducer);
