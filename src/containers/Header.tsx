import React, { Fragment } from 'react';

import { Pages } from 'constants/Common';

import { Menu } from 'styles/icons/boxicons-regular.icons';
import {
    HeaderWrap,
    Title,
    CommonHeader,
    ContentHeader
} from 'styles/containers/Header';
import { SpeakerNotes } from 'styles/icons/material.icons';

interface Props {
    page: Pages;
}

const Header: React.FC<Props> = ({ page, children }) => {
    return (
        <HeaderWrap>
            <CommonHeader>
                <Menu>Menu</Menu>
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
