import React, { Fragment, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState } from 'store';
import { PageStatusAction } from 'store/actions';

import { Pages } from 'constants/Common';

import {
    HeaderWrap,
    Title,
    CommonHeader,
    ContentHeader,
    MenuButton
} from 'styles/containers/Header';
import { SpeakerNotes } from 'styles/icons/material.icons';

interface Props {
    page: Pages;
}

const Header: React.FC<Props> = ({ page, children }) => {
    const dispatch = useDispatch();

    const leftPanel = useSelector(
        (state: StoreState) => state.PageStatusReducer.leftPanel
    );

    const handleLeftPanelStatus = useCallback(() => {
        dispatch(PageStatusAction.setLeftPanel(!leftPanel));
    }, [leftPanel]);

    return (
        <HeaderWrap>
            <CommonHeader>
                <MenuButton
                    data-testid="menu-button"
                    open={leftPanel}
                    onClick={handleLeftPanelStatus}>
                    Menu
                </MenuButton>
                <Title>
                    {page === Pages.SCHEDULER && (
                        <Fragment>
                            <SpeakerNotes>일정</SpeakerNotes>
                            <span>일정</span>
                        </Fragment>
                    )}
                </Title>
            </CommonHeader>
            <ContentHeader>{children}</ContentHeader>
        </HeaderWrap>
    );
};

export default Header;
