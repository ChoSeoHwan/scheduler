import React from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from 'store';

import { LeftPanelWrap } from 'styles/containers/LeftPanel';

const LeftPanel: React.FC = () => {
    const leftPanel = useSelector(
        (state: StoreState) => state.PageStatusReducer.leftPanel
    );
    return <LeftPanelWrap open={leftPanel}>leftPanel</LeftPanelWrap>;
};

export default LeftPanel;
