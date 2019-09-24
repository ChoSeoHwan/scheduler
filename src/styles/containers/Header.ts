import styled, { css } from 'styled-components';

import { Menu } from 'styles/icons/boxicons-regular.icons';
import { SpeakerNotes } from 'styles/icons/material.icons';

export const HeaderWrap = styled.header`
    display: flex;
    flex: 0 6.5rem;
    flex-direction: row;

    box-sizing: border-box;

    height: 6.5rem;

    border-bottom: 1px solid ${({ theme }) => theme.lineColor};

    background-color: ${({ theme }) => theme.headerBgColor};
`;

interface MenuButtonStatus {
    open: boolean;
}

export const MenuButton = styled(Menu)<MenuButtonStatus>`
    display: flex;
    flex: 0 2.5rem;
    flex-direction: row;
    height: 2.5rem;

    border-radius: 50%;

    padding: 1.5rem;

    cursor: pointer;

    transition: color 0.3s, background 0.3s;

    &:hover {
        background: ${({ theme }) => theme.hoverBgColor};
        color: ${({ theme }) => theme.hoverColor};
    }

    ${({ open }) =>
        !open &&
        css`
            background: ${({ theme }) => theme.hoverBgColor};
            color: ${({ theme }) => theme.hoverColor};
        `}
`;

export const CommonHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex: 0 25rem;
    align-items: center;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;

export const Title = styled.h1`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    height: 100%;

    box-sizing: border-box;

    color: ${({ theme }) => theme.titleColor}
    font-size: 2rem;
    font-weight: normal;
    
    ${SpeakerNotes} {
        color: ${({ theme }) => theme.iconColor}
        width: 3.5rem;
        height: 3.5rem;
        padding-right: 0.5rem;
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;
