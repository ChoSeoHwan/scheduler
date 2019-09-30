import styled, { css } from 'styled-components';

import { Menu } from 'styles/icons/boxicons-regular.icons';
import { SpeakerNotes } from 'styles/icons/material.icons';

export const HeaderWrap = styled.header`
    display: flex;
    flex: 0 5rem;
    flex-direction: row;

    box-sizing: border-box;

    background-color: ${({ theme }) => theme.header.bgColor};
`;

export const CommonHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex: 0 25rem;
    align-items: center;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
`;

interface MenuButtonStatus {
    open: boolean;
}

export const MenuButton = styled(Menu)<MenuButtonStatus>`
    display: flex;
    flex: 0 2rem;
    flex-direction: row;
    height: 2rem;
    margin-right: 0.5rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.header.iconBgColor};

    border-radius: 0.5rem;

    cursor: pointer;

    transition: color 0.3s, background 0.3s, border-radius 0.3s;

    &:hover {
        background: ${({ theme }) => theme.header.menuBtn.hoverBgColor};
        color: ${({ theme }) => theme.header.menuBtn.hoverColor};
    }

    ${({ open }) =>
        !open &&
        css`
            color: ${({ theme }) => theme.header.menuBtn.hoverColor};
            border-radius: 50%;
        `}
`;

export const Title = styled.h1`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    padding: .5rem;
    
    background-color: ${({ theme }) => theme.header.iconBgColor};
    border-radius: .5rem; 

    color: ${({ theme }) => theme.titleColor}
    font-size: 1.7rem;
    font-weight: normal;
    
    ${SpeakerNotes} {
        display: flex;
        flex: 0 2.8rem;
        color: ${({ theme }) => theme.iconColor}
        padding-right: 0.5rem;
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
`;
