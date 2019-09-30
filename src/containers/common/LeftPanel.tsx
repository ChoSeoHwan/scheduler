import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { StoreState } from 'store';

interface LeftPanelWrapState {
    open: boolean;
}

const LeftPanelWrap = styled.nav<LeftPanelWrapState>`
    display: flex;
    flex: 0 ${({ open }) => (open ? '25rem' : '8rem')};
    flex-wrap: wrap;
    flex-direction: column;

    box-sizing: border-box;

    background-color: ${({ theme, open }) =>
        open ? theme.leftPanel.bgColor : theme.leftPanel.closeBgColor};
    box-shadow: ${({ open }) => (open ? '1rem 0 2rem -2rem black' : 'none')};

    transition: flex 0.3s, background-color 0.3s, box-shadow 0.3s;
`;

const LeftPanel: React.FC = ({ children }) => {
    const leftPanel = useSelector(
        (state: StoreState) => state.PageStatusReducer.leftPanel
    );

    return (
        <LeftPanelWrap data-testid="left-panel" open={leftPanel}>
            {children}
        </LeftPanelWrap>
    );
};

export default LeftPanel;
