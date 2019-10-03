import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from 'store';

import { Process } from 'constants/common';

import {
    LeftPanelPage,
    LeftPanelWrap
} from 'styles/containers/common.LeftPanel';

interface LeftPanelState {
    children?: (
        goToPage?: (page: string) => () => void,
        goToBack?: () => void
    ) => Record<string, ReactNode>;
}

const LeftPanel: React.FC<LeftPanelState> = ({ children }) => {
    const leftPanel = useSelector(
        (state: StoreState) => state.PageStatusReducer.leftPanel
    );

    const [history, setHistory] = useState<string[]>(['main']); // 현재 까지 페이지 이동된 history
    const [status, setStatus] = useState<Process>(Process.CURRENT); // 현재 페이지로 이동한 액션 종류

    /**
     * 다음 페이지로 이동
     * @param page
     */
    const goToPage = useCallback(
        (page: string) => () => {
            if (!pageList[page]) {
                return;
            }

            setHistory([...history, page]);
            setStatus(Process.NEXT);
        },
        [history]
    );

    /**
     * 이전 페이지로 이동
     */
    const goToBack = useCallback(() => {
        if (history.length <= 1) {
            return;
        }

        setHistory(history.slice(0, history.length - 1));
        setStatus(Process.PREV);
    }, [history]);

    // LeftPanel 안에 들어갈 페이지 리스트
    const pageList: Record<string, ReactNode> = useMemo(
        () => Object.assign({ main: null }, children(goToPage, goToBack)),
        [goToPage, goToBack]
    );

    // 현재 페이지
    const page = useMemo(() => history[history.length - 1], [history]);

    return (
        <LeftPanelWrap data-testid="left-panel" open={leftPanel}>
            <LeftPanelPage key={page} status={status}>
                {pageList[page] || null}
            </LeftPanelPage>
        </LeftPanelWrap>
    );
};

export default LeftPanel;
