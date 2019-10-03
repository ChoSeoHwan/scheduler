import styled, { keyframes } from 'styled-components';

import { Process } from 'constants/common';

export const LeftPanelWrap = styled.nav<{ open: boolean }>`
    position: relative;
    display: flex;
    flex: 0 ${({ open }) => (open ? '25rem' : '6rem')};
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;

    box-sizing: border-box;

    background-color: ${({ theme, open }) =>
        open ? theme.leftPanel.bgColor : theme.leftPanel.closeBgColor};
    box-shadow: ${({ open }) => (open ? '1rem 0 2rem -2rem black' : 'none')};

    transition: flex 0.3s, background-color 0.3s, box-shadow 0.3s;
`;

const prevKeyframe = keyframes`
    0% {
        left: -2rem;
        opacity: 0;
    }
    
    100% {
        left: 0;
        opacity: 1;
    }
`;

const nextKeyframe = keyframes`
    0% {
        left: 2rem;
        opacity: 0;
    }
    
    100% {
        left: 0;
        opacity: 1;
    }
`;

export const LeftPanelPage = styled.section<{ status: Process }>`
    position: absolute;
    display: flex;
    flex-direction: row;
    flex: 1;

    width: 100%;
    height: 100%;

    animation: ${({ status }) =>
            status === Process.NEXT
                ? nextKeyframe
                : status === Process.PREV
                ? prevKeyframe
                : ''}
        0.3s;
`;
